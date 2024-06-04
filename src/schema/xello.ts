import escapeInput from "@/lib/sanitize";
import z from "zod";

export const xelloTokenSchema = z.object({
  username: z.string().transform((v) => escapeInput(v)),
  password: z.string().transform((v) => escapeInput(v)),
});

export const xelloExperienceSchema = xelloTokenSchema.extend({
  experience: z.string(),
  organization: z.string(),
  city: z.string(),
  stateProvince: z.string(),
  country: z.string(),
  formattedAddress: z.string(),
  liked: z.string(),
  disliked: z.string(),
  learned: z.string(),
  isOngoing: z.boolean(),
  experienceCategoryId: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  serviceHour: z.number(),
});

