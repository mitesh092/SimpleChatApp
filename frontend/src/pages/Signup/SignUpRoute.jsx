import { useState } from "react";
import EmailVarification from "./EmailVarification";
import Signup from "./SignUp";

const SignUpRoute = () => {
  const [userData, setUserData] = useState({});
  const [verify, setVerify] = useState(false);

  return (
    <>
      {verify ? (
        <EmailVarification userData={userData} />
      ) : (
        <Signup setVerify={setVerify} setUserData={setUserData} />
      )}
    </>
  );
};

export default SignUpRoute;
