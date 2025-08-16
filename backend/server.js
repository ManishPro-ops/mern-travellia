import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./db.js";
import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Serverless-safe MongoDB connection
await connectDB();

// Routes
app.use("/auth", authRoutes);
app.use("/contact", contactRoutes);

export default app;
