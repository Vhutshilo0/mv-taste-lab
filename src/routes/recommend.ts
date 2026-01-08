import express from "express";
import { validateTasteProfile } from "../middleware/validateTasteProfile";
import { recommendDrinks } from "../controllers/recommendController";

const router = express.Router();

// POST /api/recommend
router.post("/", validateTasteProfile, recommendDrinks);

export default router;
