import { streamSchema } from "@/schema/workers";
import { SyncEvents } from "@/types/api/workers";
import got, { Method } from "got";
import { NextRequest, NextResponse } from "next/server";
import { getSSEWriter } from "ts-sse";
import { z } from "zod";

// Must export this constant to allow streaming
export const dynamic = "force-dynamic";

// Define the endpoint for the Cloudflare AI
const endpoint = `https://api.cloudflare.com/client/v4/accounts/${process.env.ACCOUNT_ID}/ai/run/@cf/qwen/qwen1.5-14b-chat-awq`;

/**
 * This API endpoint proxies a response from Cloudflare's AI workers through Next.js,
 * so that the response can be then streamed to a client without exposing any secrets.
 *
 * @param {NextRequest} request - The incoming request object.
 * @returns {Promise<NextResponse>} - The response stream.
 */
export const GET = async (request: NextRequest): Promise<NextResponse> => {
  // Initialize a new TransformStream for the response
  const responseStream = new TransformStream();
  const writer = responseStream.writable.getWriter();
  const encoder = new TextEncoder();

  // Initialize an AbortController to handle request cancellation
  const abortController = new AbortController();
  let abort = false;

  // Handle request abortion
  request.signal.onabort = () => {
    abort = true;
    abortController.abort();
    writer.close();
  };

  // Define a function to run before each update
  const beforeFn = (worker: {
    data: z.infer<typeof streamSchema>;
    event: keyof SyncEvents;
  }) => {
    if (abort) {
      return;
    }

    streamSchema.parse(worker.data);
  };

  // Define the function to handle the streaming of status updates
  const syncStatusStream = async (notifier: SyncEvents) => {
    const options = {
      method: "POST" as Method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
      json: {
        signal: abortController.signal,
        stream: true,
        messages: [
          {
            role: "system",
            content: `You are a helpful assistant that, when given an extremely brief description about where someone you volunteered, 
                    you return a brief response that answers the following question: what did [user] like about their volunteering experience? 
                    You MUST assume the voice of the user (write in first person), and you MUST return only two concise sentence that answer the question. 
                    DO NOT write any more than that, and write in a casual tone. DO NOT reveal that you are an AI, and DO NOT write in bullets, ask for 
                    more information, or write in any other format.
                    Be specific when answering the questions, and make up any information if necessary
          `,
          },
          {
            role: "user",
            content: "I volunteered at the Frisco Public Library",
          },
        ],
      },
    };

    // Buffer to hold incoming data chunks
    let buffer = "";

    try {
      const stream = got.stream(endpoint, options);

      stream.on("data", (chunk: Buffer) => {
        // Append the incoming data to the buffer
        buffer += chunk.toString().replace("data: ", "");

        let leftBracket = buffer.indexOf("{");
        let rightBracket = buffer.lastIndexOf("}");

        // While there are complete JSON objects in the buffer
        while (leftBracket !== -1 && rightBracket !== -1) {
          const jsonString = buffer.substring(leftBracket, rightBracket + 1);

          try {
            let parsedData = JSON.parse(jsonString);

            notifier.update(
              {
                data: parsedData,
                event: "update",
              },
              { beforeFn }
            );
          } catch (e) {
            console.error(
              "Unparseable JSON found:",
              jsonString,
              "resulting in error",
              e
            );

            notifier.error(
              {
                data: null,
                event: "error",
              },
              { beforeFn }
            );
          } finally {
            // Remove the parsed JSON from the buffer
            buffer = buffer.substring(rightBracket + 1);
            leftBracket = buffer.indexOf("{");
            rightBracket = buffer.lastIndexOf("}");
          }
        }
      });

      stream.on("end", () => {
        notifier.complete(
          { data: { response: "[DONE]" }, event: "complete" },
          { beforeFn }
        );

        abortController.abort();
      });
    } catch (error) {
      console.error("Error occurred while making the request:", error);
    }
  };

  // Start the status update stream
  syncStatusStream(getSSEWriter(writer, encoder));

  // Return the response stream
  return new NextResponse(responseStream.readable, {
    headers: {
      "Content-Type": "text/event-stream",
      Connection: "keep-alive",
      "Cache-Control": "no-cache, no-transform",
    },
  });
};
