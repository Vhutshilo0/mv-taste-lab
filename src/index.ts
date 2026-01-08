import express, { Request, Response } from "express";

import dotenv from "dotenv";
dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Health check endpoint
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`MV Taste Lab API running on port ${PORT}`);
});
