const jwt = require("jsonwebtoken");
const key = require("../config/config.json").jwt_key;

module.exports = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }

  const token = authHeader.split(" ")[1];
  if (!token || token === "") {
    req.isAuth = false;
    return next();
  }

  let decoded;

  try {
    decoded = await jwt.verify(token, key);
  } catch (e) {
    req.isAuthExpired = true;
    req.isAuth = false;
    return next();
  }

  if (!decoded) {
    req.isAuth = false;
    return next();
  }
  req.isAuth = true;
  next();
};
