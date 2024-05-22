import z from "zod";

const corpsSchema = z.object({
  location: z.string(),
  distance: z.string(),
  categories: z.array(z.string()),
  skills: z.array(z.string()),
  greatFor: z.array(z.string()),
  sortCriteria: z.null(),
  keywords: z.array(z.string()),
  virtual: z.boolean(),
  dateRanges: z.array(z.string()),
});

export default corpsSchema;
