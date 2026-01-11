import { Router } from "express";
import { getTopDrinks } from "../controllers/insights.controller"; // make sure path is correct

const router = Router();

// GET /top-drinks
router.get("/top-drinks", getTopDrinks);

export default router;
