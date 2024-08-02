import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectToMongoDB from "./DB/connectToMongoDB.js";
import authRoutes from "./routes/auth.Routes.js"

const PORT = process.env.PORT || 3001 ;
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());


app.use("/api/auth", authRoutes)



app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is Running on Port : ${PORT}`);
});
