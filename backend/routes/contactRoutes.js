import express from "express";
import { sendMessage } from "../controllers/sendMessage.js";

const router = express.Router();

router.post("/send-message", sendMessage);

export default router;
