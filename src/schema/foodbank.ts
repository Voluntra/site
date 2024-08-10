import { z } from 'zod';

export const foodBankSchema = z.object({
  index: z.number().min(0).max(3),
});
