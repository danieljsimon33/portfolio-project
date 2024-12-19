const express = require("express");
const userController = require("../controllers/user");
const userStatsController = require("../controllers/userStats");

const authenticateUser = require("../guard");

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);

router.get("/validate-token", authenticateUser, (req, res) =>
  res.status(200).json({ user: req.user, message: "[Backend] Token verified." })
);

router.post("/update-stats", userStatsController.updateStats);
router.get("/get-stats", userStatsController.getStats);
router.get("/get-leaderboard", userStatsController.getLeaderboard);

module.exports = router;
