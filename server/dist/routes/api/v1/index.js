import express from "express";
var router = express.Router();
/* GET /api/v1 - Index of the api */
router.get("/", function (req, res, next) {
    res.status(200).json({ status: 200, message: "hello from server" });
});
export default router;
