import express from "express";
const router  = express.Router();

import { sendMessage } from "../controllers/Message.controller.js";
import ProtectRoute from "../middleware/ProtectRoute.js";
import { GetMessage } from "../controllers/Message.controller.js";


router.get("/:id",ProtectRoute, GetMessage)
router.post("/send/:id",ProtectRoute, sendMessage);
export default router;