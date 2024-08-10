import useAxios from '@/hooks/useAxios';
import { createHandler } from '@/lib/route-handler';
import getToken from '@/lib/token';
import { xelloExperienceSchema } from '@/schema/xello';
import { ApiResponseError, ApiResponseSuccess } from '@/types/api/response';
import { Experiences } from '@/types/api/xello';
import { AxiosError, AxiosResponse } from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export const POST = createHandler(async (request: NextRequest) => {
  const body = await request.json();
  const axios = useAxios();

  const {
    username,
    password,
    city,
    country,
    disliked,
    endDate,
    experience,
    experienceCategoryId,
    formattedAddress,
    isOngoing,
    learned,
    liked,
    organization,
    serviceHour,
    startDate,
    stateProvince,
  } = xelloExperienceSchema.parse(body);
  const jwtToken = await getToken(username, password, axios);

  const payload = {
    experience,
    organization,
    city,
    stateProvince,
    country,
    formattedAddress,
    liked,
    disliked,
    learned,
    isOngoing,
    experienceCategoryId,
    startDate,
    endDate,
    serviceHour,
  };

  return axios
    .post('https://student.xello.world/api/experiences/volunteer', payload, {
      headers: {
        authorization: jwtToken,
      },
      cache: false,
    })
    .then((res: AxiosResponse) => {
      return NextResponse.json<ApiResponseSuccess>(
        {
          message: 'Experience added successfully',
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
          message: 'Something went wrong',
          error: {
            code: e.code ?? '',
            message: e.message,
          },
        },
        {
          status: 500,
        }
      );
    });
});
