import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function seedActivity(log = true) {
  await prisma.activity.deleteMany();
  await prisma.activityToUser.deleteMany();

  //   const activity1 = await prisma.activity.create({
  //     data: {
  //       // data here
  //     },
  //   });

  if (log) {
    console.log("");
  }

  return {};
}
