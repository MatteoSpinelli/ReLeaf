const prisma = require("../../../lib/prismadb.js");
var express = require("express");
var router = express.Router();

/* GET /api/v1/questions */
router.get("/", async function (req, res, next) {
  const { lang } = req.query;
  let questions = [];
  if (lang && typeof lang === "string") {
    questions = await prisma.question.findMany({
      where: { id_lang: { lang_short: lang } },
      include: {
        labels: {
          orderBy: {
            order: "asc",
          },
        },
        values: {
          orderBy: {
            order: "asc",
          },
        },
      },
      orderBy: {
        order: "asc",
      },
    });
  } else {
    questions = await prisma.question.findMany({
      include: {
        labels: {
          orderBy: {
            order: "asc",
          },
        },
        values: {
          orderBy: {
            order: "asc",
          },
        },
      },
      orderBy: {
        order: "asc",
      },
    });
  }
  res.status(200).json(questions);
});

module.exports = router;
