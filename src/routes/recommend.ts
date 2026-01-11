import { Router } from "express";
import { recommendDrinks } from "../controllers/recommendController";
import { validateRecommend } from "../middleware/validateRecommend";

const router = Router();

/**
 * POST /api/recommend
 */
router.post("/recommend", validateRecommend, recommendDrinks);

export default router;
