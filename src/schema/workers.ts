import z from "zod";

export const streamSchema = z.object({
  response: z.string(),
  p: z.string().optional(),
});

export const promptSchema = z.object({
  systemPrompt: z.string(),
  userPrompt: z.string(),
});
