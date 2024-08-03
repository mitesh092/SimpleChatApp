import express from "express";

import ProtectRoute from "../middleware/ProtectRoute.js";
import { GetUserFromSidebar } from "../controllers/GetUserFromSidebar.js";


const router =  express.Router();

router.get("/", ProtectRoute ,GetUserFromSidebar)


export default router;
