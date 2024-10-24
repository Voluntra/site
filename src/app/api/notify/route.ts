import { createHandler } from '@/lib/route-handler';
import { Expo, ExpoPushMessage } from 'expo-server-sdk';
import { NextResponse } from 'next/server';

export const POST = createHandler(() => {
  let expo = new Expo({});
  let pushToken = '';
  let messages: ExpoPushMessage[] = [];
  messages.push({
    to: pushToken,
    sound: 'default',
    title: 'New Shift Open',
    body: 'Storm Cleanup @ 5:00 PM',
  });

  expo.sendPushNotificationsAsync(messages);

  return NextResponse.json(
    {
      message: 'Notified successfully',
    },
    {
      status: 200,
    }
  );
});
