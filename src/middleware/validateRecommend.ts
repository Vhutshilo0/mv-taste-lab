import { Request, Response, NextFunction } from "express";
import { recommendSchema } from "../validation/recommend";

export const validateRecommend = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = recommendSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      errors: result.error.issues,
    });
  }

  req.body = result.data;
  next();
};
