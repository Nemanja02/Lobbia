const jwt = require("jsonwebtoken");
const key = require("../config/config.json").jwt_key;

module.exports = async (req, res, next) => {
  req.user = {};
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    req.user.isAuth = false;
    return next();
  }

  const token = authHeader.split(" ")[1];
  if (!token || token === "") {
    req.user.isAuth = false;
    return next();
  }

  let decoded;

  try {
    decoded = await jwt.verify(token, key);
  } catch (e) {
    req.user.isAuthExpired = true;
    req.user.isAuth = false;
    return next();
  }

  if (!decoded) {
    req.user.isAuth = false;
    return next();
  }
  req.user.isAuth = true;
  next();
};
