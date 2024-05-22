import useAxios from "@/hooks/useAxios";
import { RateLimiter } from "@/lib/rate-limiter";
import corpsSchema from "@/schema/americorps";
import { ApiCorpResponse } from "@/types/api/americorp";
import { ApiResponseError, ApiResponseSuccess } from "@/types/api/response";
import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const endpoint =
  "https://nwqr0n24ec.execute-api.us-east-1.amazonaws.com/prod/volunteer-widget";

const rateLimiter = new RateLimiter({
  windowSize: 10000,
  maxRequests: 10,
});

export const POST = async (request: NextRequest) => {
  const axios = useAxios();
  const ip = request.ip ?? request.headers.get("X-Forwarded-For") ?? "unknown";
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
      }
    );
  }

  try {
    const body = await request.json();

    const {
      categories,
      dateRanges,
      distance,
      greatFor,
      keywords,
      location,
      skills,
      sortCriteria,
      virtual,
    } = corpsSchema.parse(body);

    let data = {
      categories,
      dateRanges,
      distance,
      greatFor,
      keywords,
      location,
      skills,
      sortCriteria,
      virtual,
    };

    return await axios
      .post<ApiCorpResponse>(endpoint, data)
      .then((res) => {
        return NextResponse.json<ApiResponseSuccess>(
          {
            message: "Elements fetched successfully",
            data: res.data,
          },
          {
            status: 200,
          }
        );
      })
      .catch((e: AxiosError) => {
        console.error(e);

        return NextResponse.json<ApiResponseError>(
          {
            message: "Something went wrong",
            error: {
              code: e.code ?? "",
              message: e.message,
            },
          },
          {
            status: 500,
          }
        );
      });
  } catch (e) {
    console.error(e);

    return NextResponse.json<ApiResponseError>(
      {
        message: "Something went wrong",
        error: {
          code: "500",
          message: "Invalid request body",
        },
      },
      {
        status: 400,
      }
    );
  }
};
