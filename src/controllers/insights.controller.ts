import { Request, Response } from "express";
import { getTopDrinksForTenant } from "../services/insights.service";

export const getTopDrinks = async (req: Request, res: Response) => {
  try {
    const tenantId = Number(req.query.tenant_id);
    if (!tenantId) {
      return res.status(400).json({ error: "tenant_id is required" });
    }

    const result = await getTopDrinksForTenant(tenantId);
    res.json({ tenant_id: tenantId, top_drinks: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch insights" });
  }
};
