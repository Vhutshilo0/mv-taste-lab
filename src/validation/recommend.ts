import { z } from "zod";

export const recommendSchema = z.object({
  tenant_id: z.number().int().positive(),
  sweetness: z.number().min(1).max(5),
  bitterness: z.number().min(1).max(5),
  fruitiness: z.number().min(1).max(5),
  dryness: z.number().min(1).max(5),
  strength: z.number().min(1).max(5),
});
