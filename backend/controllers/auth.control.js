import Users from "./models/Users.model.js";
import bcript from "bcryptjs";
import genrateTokenAndCookie from "../utils/genrateToken.js";

// registration Api
export const register = async (req, res) => {
  try {
    const { userName, email, password, confrimPassword, gender } = req.body;
    if (password !== confrimPassword) {
      return res.status(400).json({ error: "Password don't match !" });
    }

    const user = await Users.findOne({ userName });
    const duplicateEmail = await Users.findOne({ email });

    if (user) {
      return res.status(400).json({ error: "User is Already exists !" });
    }
    if (duplicateEmail) {
      return res.status(400).json({ error: "Email is Already register!" });
    }

    // hash passwod
    const salt = await bcript.genSalt(10);
    const hashPassword = await bcript.hash(password, salt);
   

    // API for random picture
    const boyRandomDefultPic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlRandomDefultPic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;

    const newUser = new Users({
      userName,
      email,
      password: hashPassword,
      gender,
      profilePic: gender === "male" ? boyRandomDefultPic : girlRandomDefultPic,
    });

    if (newUser) {
      // gen JWT token
      genrateTokenAndCookie(newUser._id, res)
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        userName: newUser.userName,
        profilePic: newUser.profilePic,
      });
    }else{
      res.status(400).json({error : " Inavaild user data !"})
    }
  } catch (error) {
    console.log("Error in Signup Controller : ", error.message);
    res.status(500).json({ error: "Internal  server error " });
  }
  //   UsersModel.findOne({ userName: userName })
  //     .then((user) => {
  //       if (user) {
  //         res.json("Username is already Taken !");
  //       } else {
  //         UsersModel.create(req.body)
  //           .then((User) => res.json(User))
  //           .catch((err) => res.json(err));
  //       }
  //     })
  //     .catch((err) => res.json(err));
};

// login API
export const login = async (req, res) => {
  const { email, password } = req.body;
  Users.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Sucessfully");
      } else {
        res.json("Password is Incorrect");
      }
    } else {
      res.json("User is not Found");
    }
  });
};

// Logout Api
export const logout = async (req, res) => {
  res.send("LogOUt");
};
