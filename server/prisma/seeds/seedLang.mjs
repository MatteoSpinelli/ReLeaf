import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function seedLang(log = true) {
  await prisma.lang.deleteMany();

  const langIT = await prisma.lang.create({
    data: {
      lang: "it-IT",
      lang_short: "it",
    },
  });

  const langEN = await prisma.lang.create({
    data: {
      lang: "en-GB",
      lang_short: "en",
    },
  });

  if (log) {
    console.log(langIT, langEN);
  }

  return { langIT, langEN };
}
