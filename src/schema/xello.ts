import z from "zod";

export const xelloSchema = z.object({
  username: z.string(),
  password: z.string(),
});
