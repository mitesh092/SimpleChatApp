import React, { useState } from "react";
import useUserSignUp from "../../hooks/userSignUp";

const EmailVerification = ({ userData }) => {
  const [userOtp, setUserOtp] = useState("");

  const { loading, signup } = useUserSignUp();

  const OtpChangeHandler = (e) => {
    const otpValue = e.target.value;
    setUserOtp(otpValue);

    let result = document.getElementById("result");
    if (otpValue.length > 6) {
      result.innerText = "OTP must contain exactly 6 digits";
      result.style.color = "red";
    } else if (otpValue.length === 6) {
      result.innerText = "Sign up now";
      result.style.color = "white";
    } else {
      result.innerText = "Resend";
      result.style.color = "white";
    }
  };

  const handleAccountVerification = async (e) => {
    e.preventDefault();
    userData.otp = userOtp;
    await signup(userData);
  
  };

  return (
    <form
      onSubmit={handleAccountVerification}
      className="flex flex-col items-center justify-center min-w-96 mx-auto"
    >
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
          <button
            type="submit"
            className="btn glass btn-block btn-sm mt-2"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default EmailVerification;
