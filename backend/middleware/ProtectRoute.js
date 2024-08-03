import jwt from "jsonwebtoken";
import UsersModel from "../models/Users.model.js";

const ProtectRoute = async (req, res, next) => {
  try {
    
    const Token = req.cookies.jwt;
    if (!Token) {
      return res
        .status(401)
        .json({ error: "UnAutherized - No Token  provided" });
    }

    const decoded = jwt.verify(Token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ error: "UnAutherized - Invaild  Token" });
    }

    
    const user = await UsersModel.findById(decoded.userId).select("-password");

    
    if (!user) {
      return res.status(404).json({ error: "user  Not Found" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log(
      "Error in middleware at ProtectRoute -> err.msg : ",
      error.message
    );
    res.status(500).json("Internal Server Error");
  }
};

export default ProtectRoute;
