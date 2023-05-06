const jwt = require("jsonwebtoken")
const error = require("../utils/error")

const { ACCESS_TOKEN_SECRET } = process.env

const authStrictMiddleware = async (req, res, next) => {
  const { authorization } = req.headers

  // if access token is missing deny the request
  if (!authorization) {
    req.user = null
    res.clearCookie("jwt")
    res
      .status(401)
      .json(
        error(
          401,
          "The request has not been applied because it lacks valid authentication credentials for the target resource"
        )
      )
    return
  }

  const bearerToken = authorization.split(" ")[1]

  await jwt.verify(bearerToken, ACCESS_TOKEN_SECRET, (err, decoded) => {
    // if authentication is not valid deny the request
    if (!decoded || err) {
      req.user = null
      res.clearCookie("jwt")
      res
        .status(401)
        .json(
          error(
            401,
            "The request has not been applied because it lacks valid authentication credentials for the target resource"
          )
        )
      return
    }
    // if authentication is valid set the user in the request
    req.user = decoded
    next()
  })
}

const authMiddleware = async (req, res, next) => {
  const authorization = req.headers?.authorization

  // if access token exists
  if (authorization) {
    // get the access token from bearer header
    const accessToken = authorization.split(" ")[1]

    // verify that the access token is valid and not exipred
    await jwt.verify(accessToken, ACCESS_TOKEN_SECRET, (err, decoded) => {
      // if the access token is not valid or expired unset the user and proceed to the next middleware
      if (!decoded || err) {
        req.user = null
        res.clearCookie("jwt")
        next()
      }

      // if the access token is valid send it through the request to the next middleware
      req.user = { ...decoded, accessToken: authorization }
    })
  }
  // go to the next middleware
  next()
}

module.exports = { authStrictMiddleware, authMiddleware }
