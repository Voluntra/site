import questionList from "@/config/worker-questions";
import z from "zod";

export const streamSchema = z.object({
  response: z.string(),
  p: z.string().optional(),
});

export const promptSchema = z.object({
  /** The index of generated questions to be asked as defined in the
   * `questionsList` array
   */
  question: z
    .number()
    .min(0)
    .max(questionList.length - 1),

  /** The organization where the user volunteered, which is added to
   * the prompt in the format of `I volunteered at [organization]`
   */
  organization: z
    .string()
    .length(30)
    .refine((input) => /^[a-zA-Z0-9 ]*$/.test(input)),
});
