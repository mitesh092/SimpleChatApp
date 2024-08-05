import express from "express";
import { register, login, logout } from "../controllers/auth.control.js";
import sendOTP from "../Two-fact-Authentication/controllers/otpController.js"

const router = express.Router();
router.post("/send-otp", sendOTP)

router.post("/register",register );

router.post("/login", login );

router.post("/logout", logout);
export default router;