import { z } from "zod";

export const listSchema = z.object({
  index: z.number().min(0).max(3),
});
