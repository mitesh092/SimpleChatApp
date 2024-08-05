import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useUserSignUp from "../../hooks/userSignUp";

const Signup = ({ setVerify, setUserData }) => {
  const { loading } = useUserSignUp();

  const [input, setinput] = useState({
    userName: "",
    email: "",
    otp: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const verifyHandler = async (e) => {
    e.preventDefault();
    const email = input.email;
    const suceess = await fetch("/api/auth/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
      }),
    });
    console.log(suceess);
    setVerify(true);
    setUserData(input);
  };

  const handleCheckboxChange = (gender) => {
    setinput({ ...input, gender });
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-click-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-amber-200 text-3xl font-semibold text-center text-center">
          <span className="text-amber-300"> SimpleChatApp</span>
        </h1>

        <form onSubmit={verifyHandler}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">UserName</span>
            </label>
            <input
              type="text"
              placeholder="Joe123"
              className="w-full input input-bordered  h-10 text-lime-50"
              required
              value={input.userName}
              onChange={(e) => {
                setinput({ ...input, userName: e.target.value });
              }}
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Joe@example.com"
              className="w-full input input-bordered h-10 text-lime-50"
              required
              value={input.email}
              onChange={(e) => {
                setinput({ ...input, email: e.target.value });
              }}
            />
            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered h-10 text-lime-50"
                required
                value={input.password}
                onChange={(e) => {
                  setinput({ ...input, password: e.target.value });
                }}
                autoComplete="true"
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text">confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered h-10 text-lime-50"
                required
                value={input.confirmPassword}
                onChange={(e) => {
                  setinput({ ...input, confirmPassword: e.target.value });
                }}
                autoComplete="true"
              />

              {/* gender checkbox */}
              <GenderCheckbox
                onCheckboxChange={handleCheckboxChange}
                selectedGender={input.gender}
              />

              <Link
                to="/login"
                className="text-sm  text-lime-50 hover:underline hover:text-lime-100 mt-2 inlover:underline hover:text-blue-600 mt-2 inline-block"
              >
                have an account?
              </Link>
              <div>
                <button
                  type="submit"
                  className="btn glass btn-block btn-sm mt-2 "
                  disabled={loading}
                >
                  {loading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "verify Email"
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
