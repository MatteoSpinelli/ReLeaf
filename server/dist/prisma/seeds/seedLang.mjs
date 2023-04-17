var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default function seedLang(log = true) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.lang.deleteMany();
        const langIT = yield prisma.lang.create({
            data: {
                lang: "it-IT",
                lang_short: "it",
            },
        });
        const langEN = yield prisma.lang.create({
            data: {
                lang: "en-GB",
                lang_short: "en",
            },
        });
        if (log) {
            console.log(langIT, langEN);
        }
        return { langIT, langEN };
    });
}
