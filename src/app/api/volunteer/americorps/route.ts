import useAxios from '@/hooks/useAxios';
import { createHandler } from '@/lib/route-handler';
import corpsSchema from '@/schema/americorps';
import { ApiCorpResponse } from '@/types/api/americorp';
import { ApiResponseError, ApiResponseSuccess } from '@/types/api/response';
import { AxiosError } from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const endpoint =
  'https://nwqr0n24ec.execute-api.us-east-1.amazonaws.com/prod/volunteer-widget';

export const POST = createHandler(async (request: NextRequest) => {
  const axios = useAxios();
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

  const data = {
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
          message: 'Elements fetched successfully',
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
