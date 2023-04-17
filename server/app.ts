import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import rootRoutes from "./routes/api/v1/index.js";
import authRoutes from "./routes/api/v1/auth.js";
import questionsRoutes from "./routes/api/v1/questions.js";
import activitiesRoutes from "./routes/api/v1/activities.js";
import tokenRoutes from "./routes/api/v1/token.js";
import calculatorRoutes from "./routes/api/v1/calculator.js";

const __dirname = path.resolve();

dotenv.config();

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// api routes
app.use("/api/v1", rootRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/questions", questionsRoutes);
app.use("/api/v1/activities", activitiesRoutes);
app.use("/api/v1/token", tokenRoutes);
app.use("/api/v1/calculator", calculatorRoutes);

app.get("/", function (req, res, next) {
  res.status(200).json({ message: "index" });
});

app.get("/api", function (req, res, next) {
  res.status(200).json({ message: "index" });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404, "endpoint not found"));
});

// error handler
app.use(function (err: any, req: any, res: any, next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ status: err.status || 500, message: err.message });
});

export default app;
