import { createHandler } from '@/lib/route-handler';
import { NextResponse } from 'next/server';

export const POST = createHandler(async () => {
  return NextResponse.json(
    {
      message: 'Metadata fetched successfully',
      data: {
        name: 'Storm Cleanup',
        time: '5:00 PM',
        location: 'Florida',
        description: 'Assist with cleanup efforts',
        requirements: 'Must be able to lift 50 lbs',
      },
    },
    {
      status: 200,
    }
  );
});
