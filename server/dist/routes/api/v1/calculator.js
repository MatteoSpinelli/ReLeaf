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
/* GET /api/v1/calculator */
router.post("/", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        const token = yield prisma.authToken.findFirst();
        if (token) {
            const data = yield fetch("https://api.footprintcalculator.org/v2/calculate", {
                method: "POST",
                headers: {
                    authorization: `Bearer ${token === null || token === void 0 ? void 0 : token.token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });
            const json = yield data.json();
            res.status(200).json(json);
        }
        else {
            res.status(400).json({ error: "token is undefined" });
        }
    });
});
export default router;
