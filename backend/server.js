import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js"; // default import
import { connectDB } from "./db.js";

dotenv.config();

const app = express();

// Middleware
const allowedOrigins = [
  "http://localhost:5173",
  "https://mern-travellia.vercel.app"
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes); // ✅ works now

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Connect MongoDB
await connectDB();
console.log("✅ MongoDB connected");

export default app;
