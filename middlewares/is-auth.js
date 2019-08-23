const jwt = require("jsonwebtoken");
const { jwt_key } = require("../config/config");
const { setCookie } = require("nookies");

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
    decoded = await jwt.verify(token, jwt_key);
  } catch (e) {
    if (e.name === "TokenExpiredError") {
      const credentials = await jwt.decode(token);
      const newToken = jwt.sign(
        {
          id: credentials.id,
          username: credentials.username,
          email: credentials.email
        },
        jwt_key,
        {
          expiresIn: "1d"
        }
      );
      res.setHeader("Set-Cookie", `token=${newToken}`);
      req.user.isAuth = true;
      return next();
    }
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
