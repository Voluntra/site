// apiHandler.ts
import { ApiResponseError } from '@/types/api/response';
import { NextRequest, NextResponse } from 'next/server';

export function createHandler(handler: (request: NextRequest) => any) {
  return async (request: NextRequest) => {
    try {
      return await handler(request);
    } catch (e: any) {
      console.error(e);

      return NextResponse.json<ApiResponseError>(
        {
          message: 'Something went wrong',
          error: {
            code: '500',
            message: 'Unknown error occurred',
          },
        },
        {
          status: 500,
        }
      );
    }
  };
}
