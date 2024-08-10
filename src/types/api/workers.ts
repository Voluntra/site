import { streamSchema } from '@/schema/workers';
import { EventNotifier } from 'ts-sse';
import { z } from 'zod';

export interface WorkersResponse {
  response: string;
  p: string;
}

export type SyncEvents = EventNotifier;
