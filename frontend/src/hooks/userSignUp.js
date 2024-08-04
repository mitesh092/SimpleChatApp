import React, { useState } from "react";
import toast from "react-hot-toast";


const userSignUp = () => {
  const [loading, setLoading] = useState(false);
  const signup = async ({
    userName,
    email,
    otp,
    password,
    confirmpassword,
    gender,
  }) => {
    const success = handleInputErrors({
      userName,
      email,
      otp,
      password,
      confirmpassword,
      gender,
    });

    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName,
          Email,
          otp,
          password,
          confirmpassword,
          gender,
        }),
      });

      
      console.log(res)
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {loading, signup}
};


export default userSignUp;

function handleInputErrors({
  userName,
  Email,
  otp,
  password,
  confirmpassword,
  gender,
}) {
  if (!userName || !Email || !otp || !password || !confirmpassword || !gender) {
    toast.error("plz fill all fields ");
    return false;
  }

  if (password !== confirmpassword) {
    toast.error("Password Do Not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("password must be atleast 6 character ");
    return true;
  }

  return true;
}
