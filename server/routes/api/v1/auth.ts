import express from "express";
const router = express.Router();

/* GET /api/v1/auth */
router.get("/", function (req, res, next) {
  res.status(200).json({ status: 200, message: "hello from auth endpoint" });
});

export default router;
