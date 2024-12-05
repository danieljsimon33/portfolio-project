const express = require("express");
const userController = require("../controllers/user");

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);

// GET   "/validate-token", auth func from guard.js, func sending back validation message (this is the next function)

module.exports = router;
