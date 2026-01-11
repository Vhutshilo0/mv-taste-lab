import pool from "../db";

export const getTopDrinksForTenant = async (tenantId: number) => {
  const query = `
    SELECT 
      d.name AS drink_name,
      COUNT(e.id) AS recommendation_count
    FROM recommendation_events e
    JOIN drinks d ON d.id = e.drink_id
    WHERE e.tenant_id = $1
    GROUP BY d.name
    ORDER BY recommendation_count DESC
    LIMIT 5;
  `;

  const { rows } = await pool.query(query, [tenantId]);
  return rows;
};
