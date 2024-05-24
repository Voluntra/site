import useAxios from "@/hooks/useAxios";
import { createHandler } from "@/lib/route-handler";
import { xelloSchema } from "@/schema/xello";
import { ApiResponseError, ApiResponseSuccess } from "@/types/api/response";
import { Experiences, XelloResponse } from "@/types/api/xello";
import { AxiosError, AxiosResponse } from "axios";
import { AxiosCacheInstance } from "axios-cache-interceptor";
import { NextRequest, NextResponse } from "next/server";

const getToken = async (
  username: string,
  password: string,
  axios: AxiosCacheInstance
) => {
  return await axios
    .post("https://login.xello.world/api/auth/login", {
      cache: false,
      username,
      password,
      SelectedLanguage: "en-US",
      remember: true,
    })
    .then((res: AxiosResponse<XelloResponse>) => {
      // Return user object containing jwt token
      return res.data.data.jwtToken;
    })
    .catch((e: AxiosError) => {
      throw e;
    });
};

export const POST = createHandler(async (request: NextRequest) => {
  const body = await request.json();
  const axios = useAxios();

  const { username, password } = xelloSchema.parse(body);
  let jwtToken = await getToken(username, password, axios);

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
      {
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
      }
    });
});
