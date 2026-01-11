import pool from "../db";

export interface TasteProfile {
  sweetness: number;
  bitterness: number;
  fruitiness: number;
  dryness: number;
  strength: number;
}

export const getRecommendations = async (tenantId: number, profile: TasteProfile) => {
  const { rows: drinks } = await pool.query(
    "SELECT * FROM drinks WHERE tenant_id = $1",
    [tenantId]
  );

  if (!drinks.length) return { recommendations: [], explanation: "No drinks found for this tenant." };

  const scored = drinks.map(drink => {
    const diffSquared =
      Math.pow(drink.sweetness - profile.sweetness, 2) +
      Math.pow(drink.bitterness - profile.bitterness, 2) +
      Math.pow(drink.fruitiness - profile.fruitiness, 2) +
      Math.pow(drink.dryness - profile.dryness, 2) +
      Math.pow(drink.strength - profile.strength, 2);

    const score = 1 / (1 + Math.sqrt(diffSquared));
    return { ...drink, score };
  });

  const top5 = scored.sort((a, b) => b.score - a.score).slice(0, 5);

  const explanation = "You prefer fruity, light drinks with low bitterness and moderate strength.";

  await pool.query(
    "INSERT INTO recommendation_events (tenant_id, recommended_drinks) VALUES ($1, $2)",
    [tenantId, JSON.stringify(top5.map(d => ({ id: d.id, name: d.name, score: d.score })))]
  );

  return { recommendations: top5, explanation };
};
