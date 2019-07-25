const jwt = require("jsonwebtoken");
const key = require("../config/config.json").jwt_key;
const { parseCookies } = require("nookies");

module.exports = async (req, res, next) => {
  req.user = {};
  const tokenHeader = req.get("Authorization");
  let token;
  if (tokenHeader) token = tokenHeader.split(" ")[1];
  else req.user.isAuth = false;

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
