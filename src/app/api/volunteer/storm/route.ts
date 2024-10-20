import { createHandler } from '@/lib/route-handler';
import { NextResponse } from 'next/server';

export const POST = createHandler(async () => {
  return NextResponse.json(
    {
      message: 'Metadata fetched successfully',
      data: {
        name: 'Humanitarian Relief',
        time: '12:00 PM',
        location: 'Florida',
        description:
          'Our organization provides essential humanitarian aid during hurricanes, delivering food, water, and medical supplies to affected communities',
        requirements: 'Must be able to lift 50 lbs',
      },
    },
    {
      status: 200,
    }
  );
});
