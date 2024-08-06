import bcript from "bcryptjs";

import Users from "../models/Users.model.js";
import OTP from "../Two-fact-Authentication/otp-models/otp.model.js"
import genrateTokenAndCookie from "../utils/genrateToken.js";


// registration Api
export const register = async (req, res) => {
  try {
    const { userName, email, password, confirmPassword, gender, otp } = req.body;

    
    if (!userName || !email || !password || !confirmPassword || !gender || !otp) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    // Validate OTP
    const responseOTP = await OTP.find({ email });
    if (!responseOTP.length || otp.trim() !== responseOTP[responseOTP.length - 1].otp) {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    // Check if user or email already exists
    const user = await Users.findOne({ userName });
    const duplicateEmail = await Users.findOne({ email });

    if (user) {
      return res.status(409).json({ error: "Username already exists" });
    }
    if (duplicateEmail) {
      return res.status(409).json({ error: "Email is already registered" });
    }

    // Hash password
    const salt = await bcript.genSalt(10);
    const hashPassword = await bcript.hash(password, salt);

    // Generate profile picture URL
    const boyRandomDefaultPic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlRandomDefaultPic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;

    const newUser = new Users({
      userName,
      email,
      password: hashPassword,
      gender,
      profilePic: gender === "male" ? boyRandomDefaultPic : girlRandomDefaultPic,
    });

    await newUser.save();
    genrateTokenAndCookie(newUser._id, res);

    res.status(201).json({
      _id: newUser._id,
      userName: newUser.userName,
      profilePic: newUser.profilePic,
    });
    
  } catch (error) {
    console.log("Error in Signup Controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};


// login API
export const login = async (req, res) => {
  try {

    const {userName , password} = req.body;
    const user = await Users.findOne({userName})
    
    const ispasswordCorrect = await bcript.compare(password, user?.password || "");

    if(!user || !ispasswordCorrect ){
      return res.status(400).json({error : "Invaild username or password"})
    }
    

    genrateTokenAndCookie(user._id, res);

    res.status(201).json({
      _id: user._id,
      userName: user.userName,
      profilePic: user.profilePic,
    });


  } catch (error) {
    console.log("Error in Login Controller : ", error.message);
    res.status(500).json({ error: "Internal  server error " });
  }

  
};

// Logout Api
export const logout =  (req, res) => {
  try {
    res.cookie("jwt","", {MAXaGE : 0} );
    res.status(200).json({message : " USER logout Successfully !"})
    
  } catch (error) {
    console.log("Error in Signup Controller : ", error.message);
    res.status(500).json({ error: "Internal  server error " });
  }
};


// userSignUp.js:28 
//  POST http://localhost:3001/api/auth/register 400 (Bad Request)
// signup	@	userSignUp.js:28
// handleAccountVerification	@	EmailVarification.jsx:29
// callCallback2	@	react-dom.development.js:4164
// invokeGuardedCallbackDev	@	react-dom.development.js:4213
// invokeGuardedCallback	@	react-dom.development.js:4277
// invokeGuardedCallbackAndCatchFirstError	@	react-dom.development.js:4291
// executeDispatch	@	react-dom.development.js:9041
// processDispatchQueueItemsInOrder	@	react-dom.development.js:9073
// processDispatchQueue	@	react-dom.development.js:9086
// dispatchEventsForPlugins	@	react-dom.development.js:9097
// (anonymous)	@	react-dom.development.js:9288
// batchedUpdates$1	@	react-dom.development.js:26179
// batchedUpdates	@	react-dom.development.js:3991
// dispatchEventForPluginEventSystem	@	react-dom.development.js:9287
// dispatchEventWithEnableCapturePhaseSelectiveHydrationWithoutDiscreteEventReplay	@	react-dom.development.js:6465
// dispatchEvent	@	react-dom.development.js:6457
// dispatchDiscreteEvent	@	react-dom.development.js:6430
// ﻿
