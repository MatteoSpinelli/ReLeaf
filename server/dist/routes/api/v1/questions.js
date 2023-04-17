var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import prisma from "../../../lib/prismadb.js";
import express from "express";
const router = express.Router();
/* GET /api/v1/questions */
router.get("/", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { lang } = req.query;
        let questions = [];
        if (lang && typeof lang === "string") {
            questions = yield prisma.question.findMany({
                where: { id_lang: { lang_short: lang } },
                include: { labels: true, values: true },
            });
        }
        else {
            questions = yield prisma.question.findMany({
                include: { labels: true, values: true },
            });
        }
        res.status(200).json(questions);
    });
});
export default router;
// import { Question } from "@prisma/client";
// import prisma from "../../../lib/prismadb.js";
// import express from "express";
// const router = express.Router();
// const map = {
//   1: "1",
//   10: "7",
//   25: "18",
//   30: "20",
//   20: "19",
//   27: "22",
//   28: "23",
//   7: "24",
//   24: "21",
//   23: "10",
//   18: "25",
//   22: "26",
//   19: "27",
//   26: "28",
//   33: "29",
//   29: "30",
//   21: "33",
// };
// const mapIt = {
//   18: "1",
//   24: "7",
//   1: "18",
//   20: "20",
//   23: "19",
//   27: "22",
//   7: "23",
//   28: "24",
//   25: "21",
//   19: "10",
//   10: "25",
//   26: "26",
//   22: "27",
//   33: "28",
//   30: "29",
//   21: "30",
//   29: "33",
// };
// function hashFunction(arr: Question[], map: any) {
//   const newArr: Question[] = [];
//   arr.forEach((el, i) => {
//     const id = el.id_question;
//     newArr[i] = arr.filter(
//       (item: Question) => item.id_question === map[`${id}`]
//     )[0];
//   });
//   return newArr;
// }
// /* GET /api/v1/questions */
// router.get("/", async function (req, res, next) {
//   const { lang } = req.query;
//   let questions: Question[] = [];
//   if (typeof lang === "string") {
//     if (lang) {
//       questions = await prisma.question.findMany({
//         where: { id_lang: { lang_short: lang } },
//         include: { labels: true, values: true },
//       });
//     } else {
//       questions = await prisma.question.findMany({
//         include: { labels: true, values: true },
//       });
//     }
//   }
//   questions = questions.reverse();
//   res.status(200).json(hashFunction(questions, lang === "it" ? mapIt : map));
// });
// export default router;
