// apiHandler.ts
import { RateLimiter } from "@/lib/rate-limiter";
import { ApiResponseError } from "@/types/api/response";
import { NextRequest, NextResponse } from "next/server";

const rateLimiter = new RateLimiter({
  windowSize: 10000,
  maxRequests: 10,
});

export function createHandler(handler: (request: NextRequest) => any) {
  return async (request: NextRequest) => {
    const ip =
      request.ip ?? request.headers.get("X-Forwarded-For") ?? "unknown";
    const isRateLimited = rateLimiter.limit(ip);

    if (isRateLimited) {
      return NextResponse.json<ApiResponseError>(
        {
          message: "Slow down! Too many requests",
          error: {
            code: "429",
            message: "Rate limit exceeded",
          },
        },
        {
          status: 429,
        },
      );
    }

    try {
      return await handler(request);
    } catch (e: any) {
      console.error(e);

      return NextResponse.json<ApiResponseError>(
        {
          message: "Something went wrong",
          error: {
            code: "500",
            message: "Unknown error occurred",
          },
        },
        {
          status: 500,
        },
      );
    }
  };
}
