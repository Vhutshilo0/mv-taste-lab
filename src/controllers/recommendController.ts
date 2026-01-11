import { Request, Response } from "express";
import { getRecommendations, TasteProfile } from "../services/recommendService";

export const recommendDrinks = async (req: Request, res: Response) => {
  try {
    const tenantId = Number(req.body.tenant_id);
    if (!tenantId) return res.status(400).json({ message: "tenant_id is required" });

    const profile: TasteProfile = req.body;

    const { recommendations, explanation } = await getRecommendations(tenantId, profile);

    res.status(200).json({
      tenant_id: tenantId,
      recommended_drinks: recommendations,
      explanation,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
