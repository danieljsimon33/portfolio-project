const jwt = require("jsonwebtoken");

const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  try {
    if (!token) {
      return res
        .status(401)
        .json({ message: "[Backend] Token not found, access deined." });
    }
    const verified = jwt.verify(token, process.env.JWT_KEY);
    req.user = verified;
    next();
  } catch (error) {
    res.status(401).json({ message: "[Backend] Authorization failed." });
  }
};

module.exports = authenticateUser;
