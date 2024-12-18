const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(email);

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "[Backend] User with this email address already exists."
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({ message: "[Backend] User registered successfully" });
  } catch (error) {
    console.log("[Backend] Error in registration", error);
    res.status(401).json({ message: "[Backend] Error registering user." });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const currentUser = await User.findOne({ email });
    const passwordsMatch = await bcrypt.compare(password, currentUser.password);

    if (!passwordsMatch) {
      return res.status(401).json({ message: "[Backend] Incorrect password." });
    }

    const token = await jwt.sign({ id: currentUser._id }, process.env.JWT_KEY, {
      expiresIn: "1h"
    });

    res.status(200).json({
      message: "[Backend] Login successful.",
      userData: { userId: currentUser._id, email: currentUser.email, token }
    });
  } catch (error) {
    console.log("[Backend] Error logging in user.", error);
    res.status(401).json({ message: "[Backend] Error loggin in user.", error });
  }
};

const updateStats = async (req, res) => {
  const { userId } = req.body;

  try {
  } catch (error) {
    res
      .status(400)
      .json({ message: "[Backend] Error updating user stats" + error });
  }

  /* 
  set userId const
  set const for info that is being updated

  
  
  */
};

module.exports = { register, login, updateStats };
