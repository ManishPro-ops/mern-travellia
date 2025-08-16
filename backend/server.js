import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import contact from "./routes/contact.js";
import { connectDB } from "./db.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/contact", contact);

// Serverless-safe DB connection
// Must be awaited here, before handling requests
await connectDB();

// Test route to confirm deployment
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", db: mongoose.connection.readyState });
});

// Export for Vercel
export default app;
