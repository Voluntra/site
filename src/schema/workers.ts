import { EventNotifier } from "ts-sse";
import z from "zod";

export const streamSchema = z.object({
  response: z.string(),
  p: z.string().optional(),
});

export const promptSchema = z.object({
  systemPrompt: z.string(),
  userPrompt: z.string(),
});

export type SyncEvents = EventNotifier<{
  update: {
    data: z.infer<typeof streamSchema>;
    event: "update";
  };
  complete: {
    data: z.infer<typeof streamSchema>;
    event: "update";
  };
  close: {
    data: never;
  };
  error: {
    data: never;
  };
}>;
