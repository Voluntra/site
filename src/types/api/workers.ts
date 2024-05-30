import { streamSchema } from "@/schema/workers";
import { EventNotifier } from "ts-sse";
import { z } from "zod";

export interface WorkersResponse {
  response: string;
  p: string;
}

export type SyncEvents = EventNotifier<{
  update: {
    data: z.infer<typeof streamSchema>;
    event: "update";
  };
  complete: {
    data: z.infer<typeof streamSchema>;
    event: "complete";
  };
  close: {
    data: never;
  };
  error: {
    data: any;
    event: "error";
  };
}>;
