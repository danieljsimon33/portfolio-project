const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email address already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log("Error in registration", error);
    res.status(401).json({ message: "[Backend] Error registering user." });
  }
};
