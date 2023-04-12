var express = require("express");
const { PrismaClient } = require("@prisma/client");
var router = express.Router();

const prisma = new PrismaClient();

/* GET /api/v1/questions */
router.get("/", async function (req, res, next) {
  const { lang } = req.query;
  let questions = [];
  if (lang) {
    questions = await prisma.question.findMany({
      where: { id_lang: { lang_short: lang } },
      include: { labels: true, values: true },
    });
  } else {
    questions = await prisma.question.findMany({
      include: { labels: true, values: true },
    });
  }
  res.status(200).json(questions);
});

module.exports = router;
