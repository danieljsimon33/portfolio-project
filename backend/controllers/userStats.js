const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const updateStats = async (req, res) => {
  const { userId, stats } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "[Backend] User not found." });
    }

    user.stats.wins += stats.newWins;
    user.stats.losses += stats.newLosses;
    user.stats.ties += stats.newTies;

    await user.save();
    res
      .status(200)
      .json({ message: "[Backend] User stats updated successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "[Backend] Error updating user stats" + error });
  }
};

const getStats = async (req, res) => {
  const { userId } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "[Backend] User not found." });
    }

    res.status(200).json({
      message: "[Backend] User stats successfully retrieved.",
      stats: user.stats
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "[Backend] Error retrieving user stats" + error });
  }
};

module.exports = { updateStats, getStats };
