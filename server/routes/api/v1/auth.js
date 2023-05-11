const prisma = require("../../../lib/prismadb.js")
const bcrypt = require("bcrypt")
const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const { authStrictMiddleware } = require("../../../middlewares/auth")
const error = require("../../../utils/error.js")

const { ACCESS_TOKEN_SECRET } = process.env

/* POST /api/v1/auth/login */
router.post("/login", async (req, res) => {
  const { email, password } = req.body

  if (req.user) {
    res.status(200).json({
      success: true,
      message: "Already Authenticated",
      accessToken: req.user.accessToken,
    })
    return
  }

  const user = email
    ? await prisma.user.findFirst({
        where: { email: email },
        include: {
          testResult: true,
        },
      })
    : null

  if (user) {
    const isLogged = await bcrypt.compare(password, user.password)
    if (isLogged) {
      const newToken = jwt.sign(
        {
          data: {
            email: user.email,
            name: user.name,
            lastname: user.lastname,
            role: user.role,
            testResult: user.testResult,
          },
        },
        ACCESS_TOKEN_SECRET,
        { expiresIn: "10d" }
      )

      const decoded = jwt.decode(newToken)

      res.status(200).json({
        success: true,
        message: "Authenticated successfully",
        accessToken: newToken,
        iat: decoded.iat,
        exp: decoded.exp,
      })
    } else {
      res.status(401).json({
        success: false,
        ...error(401, "Password not valid"),
      })
    }
  } else {
    res.status(401).json({
      success: false,
      ...error(401, "Email not valid"),
    })
  }
})

/* POST /api/v1/auth/signup */
router.post("/signup", async (req, res) => {
  const { email, password, name = "", lastname = "", testResult } = req.body
  const { user } = req
  if (user) {
    res.status(403).json(error(403, "Cannot sign up while authenticated"))
    return
  }

  const hashedPassword = await bcrypt.hash(password, 8)

  try {
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        lastname,
        testResult: {
          create: {
            overshoot_date: testResult.overshoot_date,
            carbon_footprint: testResult.carbon_footprint,
            carbon_percentage: testResult.carbon_percentage,
            ecological_footprint: testResult.ecological_footprint,
            earth: testResult.earth,
            crop: testResult.crop,
            graz: testResult.graz,
            forest: testResult.forest,
            fish: testResult.fish,
            energy: testResult.energy,
            built: testResult.built,
            food: testResult.food,
            housing: testResult.housing,
            transport: testResult.transport,
            goods: testResult.goods,
            services: testResult.services,
          },
        },
      },
    })
    const newToken = jwt.sign(
      {
        data: {
          email: email,
          name: name,
          lastname: lastname,
          testResult,
        },
      },
      ACCESS_TOKEN_SECRET,
      { expiresIn: "10d" }
    )
    const decoded = jwt.decode(newToken)
    res.status(200).json({
      success: true,
      message: "sign up success",
      accessToken: newToken,
      iat: decoded.iat,
      exp: decoded.exp,
    })
  } catch (err) {
    console.log(err)
    res.status(409).json(err.message)
  }
})

/* GET /api/v1/auth/user */
router.get("/user", authStrictMiddleware, async (req, res) => {
  let { user } = req
  if (user) {
    /* TODO */
    /* fetch the db to retrive info for personal area */
    /* const dataToBeAdded = await prisma.user.findFirst({
      where: {
        email: user.email,
      },
    })
    user = { ...user, ...dataToBeAdded } */
    res.status(200).json(user)
    return
  }

  res.status(401).json(error(401, "The request has not been applied because it lacks valid authentication credentials for the target resource"))
})

router.get("/logout", async (req, res) => {
  req.user = null
  res.clearCookie("jwt").status(200).json({
    message: "User logged out succesfully",
  })
})

module.exports = router
