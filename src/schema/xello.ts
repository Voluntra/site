import escapeInput from "@/lib/sanitize";
import z from "zod";

export const xelloSchema = z.object({
  username: z.string().transform((v) => escapeInput(v)),
  password: z.string().transform((v) => escapeInput(v)),
});
