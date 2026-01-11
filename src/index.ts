import express, { Request, Response } from "express";
import dotenv from "dotenv";
import insightsRouter from "./routes/insight";

import recommendRouter from "./routes/recommend";

dotenv.config();

const app = express();
app.use("/api/insight", insightsRouter);

// Parse incoming JSON requests
app.use(express.json());

// Mount API routes
app.use("/api", recommendRouter);

// Health check endpoint
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok" });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`MV Taste Lab API running on port ${PORT}`);
});