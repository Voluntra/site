import { createHandler } from '@/lib/route-handler';
import { NextRequest, NextResponse } from 'next/server';

export const POST = createHandler(async (request: NextRequest) => {
  return NextResponse.json(
    {
      message: 'Metadata fetched successfully',
      time: '2021-10-07T14:00:00Z',
      location: 'Florida',
      description:
        'Hurricane Michael was a very powerful and destructive tropical cyclone that became the first Category 5 hurricane to strike',
      requirements: 'Must be able to lift 50 lbs',
    },
    {
      status: 200,
    }
  );
});
