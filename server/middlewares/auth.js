const jwt = require("jsonwebtoken");

const { ACCESS_TOKEN_SECRET } = process.env;

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    const bearerToken = authorization.split(" ")[1];

    await jwt.verify(bearerToken, ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (decoded) {
        req.user = { data: decoded.data, accessToken: authorization };
        next();
      } else {
        res.status(401).json({ message: "401 Unauthorized Access" });
      }
    });
  } else {
    res.status(401).json({ message: "401 Unauthorized Access" });
  }
};

const verifyAccessToken = async (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    const bearerToken = authorization.split(" ")[1];

    await jwt.verify(bearerToken, ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (decoded) {
        req.user = { data: decoded.data, accessToken: authorization };
      }
    });
  }
  next();
};

module.exports = { authMiddleware, verifyAccessToken };
