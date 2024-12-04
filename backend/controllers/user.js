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

    res.status(201).json({ message: "[Backend] User registered successfully" });
  } catch (error) {
    console.log("[Backend] Error in registration", error);
    res.status(401).json({ message: "[Backend] Error registering user." });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const currentUser = User.findOne({ email });

    const passwordsMatch = bcrypt.compare(password, currentUser.password);

    if (!passwordsMatch) {
      return res.status(401).json({ message: "[Backend] Incorrect password." });
    }

    res.status(200).json({ message: "[Backend] Login successful." });
  } catch (error) {
    console.log("[Backend] Error logging in user.", error);
    res.status(401).json({ message: "[Backend] Error loggin in user.", error });
  }
};

module.exports = { register, login };
