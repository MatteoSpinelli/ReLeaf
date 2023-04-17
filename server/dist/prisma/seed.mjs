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
// import external seed files
import seedLang from "./seeds/seedLang.mjs";
import seedActivity from "./seeds/seedActivity.mjs";
import seedQuestionIT from "./seeds/seedQuestionIT.mjs";
import seedQuestionEN from "./seeds/seedQuestionEN.mjs";
const prisma = new PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // delete all user's test results
        yield prisma.testResult.deleteMany();
        // seed languages ("it", "en")
        const { langIT, langEN } = yield seedLang();
        // seed activities
        const activities = yield seedActivity();
        // delete all questions, labels and values before reseeding it
        yield prisma.label.deleteMany();
        yield prisma.value.deleteMany();
        yield prisma.question.deleteMany();
        // seed italian and english questions
        const questionsIT = yield seedQuestionIT({ langIT });
        const questionsEN = yield seedQuestionEN({ langEN });
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
