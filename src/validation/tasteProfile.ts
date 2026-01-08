import { z } from "zod";

export const tasteProfileSchema = z.object({
  sweetness: z.number().min(1).max(5),
  bitterness: z.number().min(1).max(5),
  fruitiness: z.number().min(1).max(5),
  dryness: z.number().min(1).max(5),
  strength: z.number().min(1).max(5),
});
