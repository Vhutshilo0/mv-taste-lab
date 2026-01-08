import { Request, Response, NextFunction } from "express";
import { tasteProfileSchema } from "../validation/tasteProfile";

export const validateTasteProfile = (req: Request, res: Response, next: NextFunction) => {
  const result = tasteProfileSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ errors: result.error.issues });
  }

  // Attach parsed data for downstream use
  req.body = result.data;
  next();
};
