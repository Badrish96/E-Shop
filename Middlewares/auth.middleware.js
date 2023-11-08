//File has jwt token system for user login
const jwt = require("jsonwebtoken");

const authConfig = require("../Configs/auth.config");

verifyToken = (req, res, next) => {
  let token = req.headers["x-auth-token"];

  if (!token) {
    return res.status(404).send({
      message: "No token provided!",
    });
  }
  jwt.verify(token, authConfig.secret, (err, payload) => {
    if (err) {
      return res.status(401).send({
        message: "Please login first to access this endpoint!",
      });
    }
    req.user = payload;
    req.role = payload.role;
    next();
  });
};

isAdmin = async (req, res, next) => {
  if (req.role != "ADMIN") {
    return res.status(403).send({
      message: "You are not authorized to access this endpoint!",
    });
  } else {
    next();
  }
};

const authFunction = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
};

module.exports = authFunction;
