const prisma = require("../../../lib/prismadb.js");
var express = require("express");
var router = express.Router();

/* GET /api/v1/calculator */
router.post("/", async function (req, res, next) {
  const body = req.body;
  try {
    const token = await prisma.authToken.findFirst({ where: {} });

    const data = await fetch(
      "https://api.footprintcalculator.org/v2/calculate",
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${token.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const json = await data.json();

    res.status(200).json(json);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
