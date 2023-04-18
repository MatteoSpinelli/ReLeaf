const prisma = require("../../../lib/prismadb.js");
var express = require("express");
var router = express.Router();

/* GET /api/v1/token */
router.get("/", async function (req, res, next) {
  const { newVal } = req.query;

  const token = await prisma.authToken.findFirst();

  if (token) {
    await prisma.authToken.update({
      where: {
        id: token.id,
      },
      data: {
        id: token.id,
        token: newVal,
      },
    });
  } else {
    await prisma.authToken.create({
      data: {
        token: newVal,
      },
    });
  }

  res.status(200).json({ status: 200, message: "hello from token endpoint" });
});

module.exports = router;
