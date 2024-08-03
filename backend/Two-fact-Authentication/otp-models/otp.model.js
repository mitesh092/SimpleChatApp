import mongoose from "mongoose";



const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  otp: {
    type: String,
    require: true,
  },

  createAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 3, // otp work only within 3 minits
  },
});



const OptModel = mongoose.model("OTP", otpSchema);
export default  OptModel;
