const prisma = require("../../../lib/prismadb.js");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("../../../middlewares/auth");

const { ACCESS_TOKEN_SECRET } = process.env;

/* POST /api/v1/auth/login */
router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  if (req.user) {
    res.status(200).json({
      success: true,
      accessToken: req.user.accessToken,
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
      const data = jwt.sign(
        {
          data: { email: user.email, role: user.role },
        },
        ACCESS_TOKEN_SECRET,
        { expiresIn: "10d" }
      );
      res.status(200).json({ success: true, accessToken: data });
    } else {
      res.status(400).json({ success: false, message: "Password not valid" });
    }
  } else {
    res.status(400).json({ success: false, message: "Email not valid" });
  }
});

/* POST /api/v1/auth/signup */
router.post("/signup", async (req, res) => {
  const { email, password, name = "", lastname = "", testResult } = req.body;

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

    res.status(201).json({ success: true, message: "user created", user });
  } catch (error) {
    res.status(400).json({ success: false, message: "email already exists" });
  }
});

router.get("/user", authMiddleware, async (req, res) => {
  const user = await prisma.user.findFirst({
    where: { email: req.user.email },
  });

  res.status(200).json({
    email: user.email,
    name: user.name,
    lastname: user.lastname,
    role: user.role,
  });
});

module.exports = router;
