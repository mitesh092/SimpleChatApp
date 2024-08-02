import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({path : "/SimpleChat app/backend/.env"});

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connencted TO MongoDb")
    } catch (error) {
        console.log("trying to connect mongo_DB ", error.message);
    }
}

export default connectToMongoDB;