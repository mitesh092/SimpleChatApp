import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useUserSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    userName,
    email,
    otp,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      userName,
      email,
      otp,
      password,
      confirmPassword,
      gender,
    });

    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          email,
          otp,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json(); // Handling the JSON response

      // localsstorage

      if (res.ok) {
        toast.success("Registration successful!");
        localStorage.setItem("Auth-user",JSON.stringify(data));
        setAuthUser(data);
        // Handle successful registration here, like redirecting the user
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useUserSignUp;

function handleInputErrors({
  userName,
  email,
  otp,
  password,
  confirmPassword,
  gender,
}) {
  if (!userName || !email || !password || !otp || !confirmPassword || !gender) {
    toast.error("Please fill all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
