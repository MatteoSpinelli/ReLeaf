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
/* GET /api/v1/token */
router.get("/", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { newVal } = req.query;
        const token = yield prisma.authToken.findFirst();
        if (typeof newVal === "string") {
            if (token) {
                yield prisma.authToken.update({
                    where: {
                        id: token.id,
                    },
                    data: {
                        id: token.id,
                        token: newVal,
                    },
                });
            }
            else {
                yield prisma.authToken.create({
                    data: {
                        token: newVal,
                    },
                });
            }
        }
        res.status(200).json({ status: 200, message: "hello from token endpoint" });
    });
});
export default router;
