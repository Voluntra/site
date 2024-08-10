import useAxios from '@/hooks/useAxios';
import { createHandler } from '@/lib/route-handler';
import { foodBankSchema } from '@/schema/foodbank';
import { FoodBank } from '@/types/api/foodbank';
import { ApiResponseError, ApiResponseSuccess } from '@/types/api/response';
import { AxiosError } from 'axios';
import * as cheerio from 'cheerio';
import { NextRequest, NextResponse } from 'next/server';

export const POST = createHandler(async (request: NextRequest) => {
  const axios = useAxios();

  const body = await request.json();
  const { index } = foodBankSchema.parse(body);

  /**
   * If no index is specified, the will evalute to the endpoint for the first page
   */
  const endpoint = `https://volunteer.ntfb.org/need/${
    index > 0 ? 'index/' + index * 12 : ''
  }`;

  const data: FoodBank[] = [];

  return await axios
    .get(endpoint)
    .then((res) => {
      // Load the HTML into cheerio
      const $ = cheerio.load(res.data);

      // Find all elements with classname `need`
      const $need = $('.need');

      // For each element found, push the innerHTML if it exists
      $need.each((_, element) => {
        // Create an object with the properties of FoodBank
        let opportunity = Object.create(null) as FoodBank;

        // All code below this builds the object
        const href = $(element).find('.card-body').prop('href');
        const match = href && href.match(/(\d{6,7})$/);
        if (match) {
          opportunity.id = +match[0];
        }

        opportunity.title = $(element).find('.title').html()?.trim();
        opportunity.excerpt = $(element).find('.excerpt').html();

        // Add the object to the `data` array
        data.push(opportunity);
      });

      return NextResponse.json<ApiResponseSuccess>(
        {
          message: 'Elements fetched successfully',
          data: data,
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
