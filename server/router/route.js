import express from "express";
import { sendEmail } from "../controller.js/emailController.js";

const router = express.Router();
router.post("/send-email", sendEmail);
router.get("/", (req, res) => {
  res.send("API is running...");
}); 
export default router;

