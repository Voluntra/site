import useAxios from "@/hooks/useAxios";
import corpsSchema from "@/schema/americorps";
import { ApiCorpResponse } from "@/types/api/americorp";
import { ApiResponseError, ApiResponseSuccess } from "@/types/api/response";
import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

const endpoint =
  "https://nwqr0n24ec.execute-api.us-east-1.amazonaws.com/prod/volunteer-widget";

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const axios = useAxios();

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
