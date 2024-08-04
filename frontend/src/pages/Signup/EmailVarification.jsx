import React from "react";

const EmailVarification = () => {
  return (
    <div flex flex-col items-center justify-center min-w-96 mx-auto>
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-click-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-amber-200 text-3xl font-semibold text-center text-center">
          {" "}
          Email
          <span className="text-amber-300"> Verifiaction</span>
        </h1>

        <div>
          <label className="label">
            <span className="text-base label-text">OTP</span>
          </label>
          <input
            type="text"
            placeholder="Enter your OTP"
            className="w-full input input-bordered h-10 text-lime-50"
          />
        </div>
        <a
          href="/signup"
          className="text-sm  text-lime-50 hover:underline hover:text-lime-100 mt-2 inlover:underline hover:text-blue-600 mt-2 inline-block"
        >
          Resend OTP
        </a>
        <div>
          <button className="btn glass btn-block btn-sm mt-2">
            SingUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVarification;
