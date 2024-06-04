import useAxios from "@/hooks/useAxios";
import { createHandler } from "@/lib/route-handler";
import getToken from "@/lib/token";
import { xelloTokenSchema } from "@/schema/xello";
import { ApiResponseError, ApiResponseSuccess } from "@/types/api/response";
import { Experiences } from "@/types/api/xello";
import { AxiosError, AxiosResponse } from "axios";
import { NextRequest, NextResponse } from "next/server";

export const POST = createHandler(async (request: NextRequest) => {
  const body = await request.json();
  const axios = useAxios();

  const { username, password } = xelloTokenSchema.parse(body);
  const jwtToken = await getToken(username, password, axios);

  return axios
    .get("https://student.xello.world/api/experiences", {
      cache: false,
      headers: {
        Culture: "en-US",
        Dnt: "1",
        Authorization: jwtToken,
      },
    })
    .then((res: AxiosResponse<Experiences[], any>) => {
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
});
