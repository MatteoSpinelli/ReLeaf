var express = require("express");
var router = express.Router();

/* GET /api/v1/activities */
router.get("/", function (req, res, next) {
  res
    .status(200)
    .json({ status: 200, message: "hello from activities endpoint" });
});

module.exports = router;
