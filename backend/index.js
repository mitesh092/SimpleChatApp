import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

// routes
import authRoutes from "./routes/auth.Routes.js";
import MessageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.Routes.js"


// connect to Databse 
import connectToMongoDB from "./DB/connectToMongoDB.js"; 


const PORT = process.env.PORT || 3001 ;
const app = express();

dotenv.config();
app.use(express.json()); //get req.body
app.use(cors());
app.use(cookieParser()) //accessing cookie from pkg cookieParser


app.use("/api/auth", authRoutes);
app.use("/api/messages", MessageRoutes);
app.use("/api/users", userRoutes)





app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is Running on Port : ${PORT}`);
});
