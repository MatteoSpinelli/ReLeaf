const prisma = require("../../../lib/prismadb.js");
var express = require("express");
var router = express.Router();

const map = {
  "1": "1",
  "10": "7",
  "25": "18",
  "30": "20",
  "20": "19",
  "27": "22",
  "28": "23",
  "7": "24",
  "24": "21",
  "23": "10",
  "18": "25",
  "22": "26",
  "19": "27",
  "26": "28",
  "33": "29",
  "29": "30",
  "21": "33",
}

function hashFunction(arr){
  const newArr = []
  arr.forEach((el, i) => {
    const id = el.id_question
    newArr[i] = arr.filter(item => item.id_question == map[`${id}`])[0]
  })
  return newArr
}

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
  questions = questions.reverse()
  res.status(200).json(hashFunction(questions));
});

module.exports = router;
