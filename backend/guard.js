const jwt = require("jsonwebtoken");

const authenticateUser = async (req, res, next) => {
  const token = req.body.split(" ")[1];

  try {
    if (!token) {
      return res
        .status(401)
        .json({ message: "[Backend] Token not found, access deined." });
    }
    const verified = jwt.verify(process.env.JWT_KEY);
    next();
  } catch (error) {
    res.status(401).json({ message: "[Backend] Authorization failed." });
  }
};

module.exports = authenticateUser;
