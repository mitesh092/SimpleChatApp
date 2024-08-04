import React, { useState } from "react";
import userSignUp from "../../hooks/userSignUp";

const EmailVerification = ({userData}) => {
    const [userOtp, setUserOtp] = useState("");

    //user defined hook
    const {loading, signup} = userSignUp();
     
    const OtpChangeHandler = (e) => {
      setUserOtp(e.target.value)
      console.log(userOtp.length)
      let result = document.getElementById("result");
      if(userOtp.length+1 > 6){
        result.innerText = "otp contain 6 digit";
        result.style.color = "red";
      }else if(userOtp.length+1 === 6){
        result.innerText = "sigUp now";
        result.style.color = "white";
      }else{
        result.innerText = "Resend";
        result.style.color = "white";
      }
    }

    
    const handleAccountVerification = async (e) => {
      e.preventDefault();
      userData.otp = userOtp;
      console.log(userData)
      await signup(userData); 
    };

    return (
        <form onSubmit={handleAccountVerification} className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-click-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-amber-200 text-3xl font-semibold text-center">
                    Email
                    <span className="text-amber-300"> Verification</span>
                </h1>

                <div>
                    <label className="label">
                        <span className="text-base label-text">OTP</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your OTP"
                        className="w-full input input-bordered h-10 text-lime-50"
                        value={userOtp}
                        onChange={OtpChangeHandler}
                        required
                    />
                </div>
                <a  
                    id="result"
                    href="/login"
                    className="text-sm text-lime-50 hover:underline hover:text-lime-100 mt-2 inline-block"
                >
                    Resend OTP
                </a>
                <div>
                    <button className="btn glass btn-block btn-sm mt-2">
                        SignUp
                    </button>
                </div>
            </div>
        </form>
    );
};

export default EmailVerification;
