import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  

  const login = async (userName, password) => {

    const success   = handleInput(userName, password);

    if(!success) return;
    setLoading(true);
    try {
      const res = await fetch("https://simplechatapp-0s7v.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("Auth-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;


function handleInput(userName, password){
    if(!userName || !password){
        toast.error("plx fill all fields");
        return false;
    }
    return true;
}