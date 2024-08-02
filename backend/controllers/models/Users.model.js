import { profile } from "console";
import mongoose from "mongoose";
import { type } from "os";

const UserSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  gender: { type: String, require: true, enum: ["male", "female"] },
  profilePic: { type: String, default: "" },
});

const UsersModel = mongoose.model("User", UserSchema);

export default UsersModel;
