const prisma = require("../../../lib/prismadb.js");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { authStrictMiddleware } = require("../../../middlewares/auth");
const error = require("../../../utils/error.js");

const { ACCESS_TOKEN_SECRET } = process.env;

/* POST /api/v1/auth/login */
router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  if (req.user) {
    res.status(200).json({
      success: true,
      message: "Already Authenticated",
      accessToken: req.user.accessToken.split(" ")[1],
      iat: req.user.iat,
      exp: req.user.exp,
    });
    return;
  }

  const user = email
    ? await prisma.user.findFirst({
        where: { email: email },
      })
    : null;

  if (user) {
    const isLogged = await bcrypt.compare(password, user.password);
    if (isLogged) {
      const newToken = jwt.sign(
        {
          data: {
            email: user.email,
            name: user.name,
            lastname: user.lastname,
            role: user.role,
          },
        },
        ACCESS_TOKEN_SECRET,
        { expiresIn: "10d" }
      );

      const decoded = jwt.decode(newToken);

      res.status(200).json({
        success: true,
        message: "Authenticated successfully",
        accessToken: newToken,
        iat: decoded.iat,
        exp: decoded.exp,
      });
    } else {
      res.status(401).json({
        success: false,
        ...error(401, "Password not valid"),
      });
    }
  } else {
    res.status(401).json({
      success: false,
      ...error(401, "Email not valid"),
    });
  }
});

/* POST /api/v1/auth/signup */
router.post("/signup", async (req, res) => {
  const { email, password, name = "", lastname = "", testResult } = req.body;
  const { user } = req;

  if (user) {
    res.status(403).json(error(403, "Cannot sign up while authenticated"));
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 8);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        lastname,
        TestResult: testResult && {
          create: { ...testResult },
        },
      },
      
    });
    const newToken = jwt.sign(
      {
        data: {
          email: email,
          name: name,
          lastname: lastname,
        },
      },
      ACCESS_TOKEN_SECRET,
      { expiresIn: "10d" }
    );
    const decoded = jwt.decode(newToken);
    res.status(200).json({
      success: true,
      message: "sign up success",
      accessToken: newToken,
      iat: decoded.iat,
      exp: decoded.exp,
    });
  } catch (err) {
    res.status(409).json(err.message);
  }
});

/* GET /api/v1/auth/user */
router.get("/user", authStrictMiddleware, async (req, res) => {
  const { user } = req;
  if (user) {
    res.status(200).json(user);
    return;
  }

  res
    .status(401)
    .json(
      error(
        401,
        "The request has not been applied because it lacks valid authentication credentials for the target resource"
      )
    );
});

module.exports = router;
