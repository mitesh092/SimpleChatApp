const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UsersModel = require("./models/Users");
const PORT = 3001;
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/Users");

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UsersModel.findOne({ email: email }).then((user) => {
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
});

app.post("/register", (req, res) => {
  const {userName} = req.body;
  UsersModel.findOne({ userName: userName })
    .then((user) => {
      if (user) {
        res.json("Username is already Taken !");
      } else {
        UsersModel.create(req.body)
          .then((User) => res.json(User))
          .catch((err) => res.json(err));
      }
    })
    .catch((err) => res.json(err));
});
app.listen(PORT, () => {
  console.log(`Server is Running on Port : ${PORT}`);
});
