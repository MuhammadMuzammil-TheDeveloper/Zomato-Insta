const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  const { fullName, email, password } = req.body;
  const isUserAlreadyExists = await userModel.findOne({
    email,
  });
  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "User already Exists",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userModel.create({
    fullName,
    email,
    password: hashedPassword,
  });
  const token = jwt.sign(
    {
      id: user._id,
    },
    "49022d4a12cf393770351645b8b19ac0",
  );
  res.cookie("token", token);

  res.status(201).json({
    messgae: "User registered Successfully",
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
}

async function loginUser(req, res){
    const {email, password} = req.body;
    const user = await userModel.findOne({
        email
    })
    if(!user){
       return res.status(400).json({
            message: "Invalid email or password"
        })
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
         return res.status(400).json({
            message: "Invalid email or password"
        })
    }
    const token = jwt.sign({
        id: user._id,
    }, "49022d4a12cf393770351645b8b19ac0")
    res.cookie("token", token)
    res.status(200).json({
        message: "User Logged in Successfully",
        user:{
            _id: user._id,
            email: user.email,
            fullName: user.fullName
        }
    })
}
//48:31
module.exports = {
    registerUser,
    loginUser
}
