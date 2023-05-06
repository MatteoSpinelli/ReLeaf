import { PrismaClient } from "@prisma/client"

// import external seed files
import seedLang from "./seeds/seedLang.mjs"
import seedActivity from "./seeds/seedActivity.mjs"
import seedQuestionIT from "./seeds/seedQuestionIT.mjs"
import seedQuestionEN from "./seeds/seedQuestionEN.mjs"

const prisma = new PrismaClient()
async function main() {
  // delete all user's test results
  await prisma.testResult.deleteMany()

  // seed languages ("it", "en")
  const { langIT, langEN } = await seedLang()

  // seed activities
  const activities = await seedActivity()

  // delete all questions, labels and values before reseeding it
  await prisma.label.deleteMany()
  await prisma.value.deleteMany()
  await prisma.question.deleteMany()

  // seed italian and english questions
  const questionsIT = await seedQuestionIT({ langIT })
  const questionsEN = await seedQuestionEN({ langEN })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
