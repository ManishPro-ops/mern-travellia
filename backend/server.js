import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import { connectDB } from "./db.js";



dotenv.config();

const app = express();

// Middleware
const allowedOrigins = [
  "http://localhost:5173", 
  "https://mern-travellia.vercel.app" // 👈 your frontend deployed URL
];

app.use(cors({
  origin: function (origin, callback) {
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
app.use("/api/contact",contactRoutes);

await connectDB();
console.log(`✅ MongoDB connected`);

// MongoDB connection (connect only once)
// {if (!mongoose.connection.readyState) {
//   mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("✅ MongoDB connected");
//     console.log("Database name:", mongoose.connection.name);
//   })
//   .catch((err) => console.log("❌ MongoDB connection error:", err));
// }

// ✅ Instead of app.listen, just export to make it live on vercel
// const PORT=process.env.PORT||8000;

// app.listen(PORT,()=>{
//   console.log(`server running on port ${PORT}`)
// })


app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});
export default app;
