// controllers/otpController.js
import otpGenerator from 'otp-generator';
import OTP  from '../otp-models/otp.model.js';
import User  from'../../models/Users.model.js';
import mailSender from "../mailutils/mailSender.js"

async function sendVerificationEmail(email, otp) {
  try {
    const mailResponse = await mailSender(
      email,
      "Verification Email",
      `<h1>Please confirm your OTP</h1>
         <p>Here is your OTP code: ${otp}</p>`
    );
    console.log("Email sent successfully: ", mailResponse);
  } catch (error) {
    console.log("Error occurred while sending email: ", error);
    throw error;
  }
}
  OTP.schema.pre("save", async function (next) {
  console.log("New document saved to the database");
  // Only send an email when a new document is created
  
});

const sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    // Check if user is already present
    const checkUserPresent = await User.findOne({ email });
    // If user found with provided email
    if (checkUserPresent) {
      return res.status(401).json({
        success: false,
        message: 'User is already registered',
      });
    }
    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    let result = await OTP.findOne({ otp: otp });
    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
      });
      result = await OTP.findOne({ otp: otp });
    }

    // save in datbase otps
    await sendVerificationEmail(email, result)
    const otpPayload = { email, otp };
    const otpBody = await OTP.create(otpPayload); //what do this line 
    res.status(200).json({
      success: true,
      message: 'OTP sent successfully',
      otp,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: "internal server error" });
  }
};

export default sendOTP;