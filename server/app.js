require("dotenv").config()
const createError = require("http-errors")
const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const cors = require("cors")

const rootRoutes = require("./routes/api/v1")
const authRoutes = require("./routes/api/v1/auth.js")
const questionsRoutes = require("./routes/api/v1/questions.js")
const activitiesRoutes = require("./routes/api/v1/activities.js")
const tokenRoutes = require("./routes/api/v1/token.js")
const calculatorRoutes = require("./routes/api/v1/calculator.js")
const { authMiddleware } = require("./middlewares/auth")
const app = express()

const whitelist = ["http://localhost:3000", "https://re-leaf.vercel.app"]
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin || origin.contains("re-leaf")) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
}

app.use(cors({ credentials: true, ...corsOptions }))
app.use(logger("dev"))
app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use(authMiddleware)

// api routes
app.use("/api/v1", rootRoutes)
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/questions", questionsRoutes)
app.use("/api/v1/activities", activitiesRoutes)
app.use("/api/v1/token", tokenRoutes)
app.use("/api/v1/calculator", calculatorRoutes)

app.get("/", function (req, res, next) {
  res.status(200).json({ message: "index" })
})

app.get("/api", function (req, res, next) {
  res.status(200).json({ message: "index" })
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404, "endpoint not found"))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500).json({ status: err.status || 500, message: err.message })
})

module.exports = app
