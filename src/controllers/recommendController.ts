import { Request, Response } from "express";

export const recommendDrinks = async (req: Request, res: Response) => {
  // TODO: Implement recommendation logic
  const { sweetness, bitterness, fruitiness, dryness, strength } = req.body;

  // Temporary response
  res.status(200).json({
    message: "Recommendation logic not implemented yet",
    input: { sweetness, bitterness, fruitiness, dryness, strength },
  });
};
