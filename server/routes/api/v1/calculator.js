var express = require("express");
const { PrismaClient } = require("@prisma/client");
var router = express.Router();

const prisma = new PrismaClient();

/* GET /api/v1/calculator */
router.post("/", async function (req, res, next) {
  const body = req.body;
  const token = await prisma.authToken.findFirst();

  const data = await fetch("https://api.footprintcalculator.org/v2/calculate", {
    method: "POST",
    headers: {
      authorization: "Bearer " + token.token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const json = await data.json();

  res.status(200).json(json);
});

module.exports = router;
