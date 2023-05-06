import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function seedActivity(log = true) {
  await prisma.activityToUser.deleteMany()
  await prisma.activityLang.deleteMany()
  await prisma.activity.deleteMany()

  const activity1 = await prisma.activity.create({
    data: {
      eco_points: 10,
      activityLang: {
        create: [
          {
            title: "Support renewable energy",
            description:
              "Choose to support renewable energy sources like wind, solar, and hydro power by signing up for a green energy plan or installing solar panels on your property",
            link_rewrite: "support-renewable-energy",
            image: "/images/activities/support-renewable-energy.png",
            id_lang: { connect: { lang_short: "en" } },
          },
          {
            title: "Supporta le energie rinnovabili",
            description:
              "Scegli di supportare le fonti di energia rinnovabile come l'energia eolica, solare e idroelettrica iscrivendoti a un piano di energia verde o installando pannelli solari sulla tua proprietà",
            link_rewrite: "supporta-le-energie-rinnovabili",
            image: "/images/activities/support-renewable-energy.png",
            id_lang: { connect: { lang_short: "it" } },
          },
        ],
      },
    },
  })

  const activity2 = await prisma.activity.create({
    data: {
      eco_points: 10,
      activityLang: {
        create: [
          {
            title: "Plant a tree on Treedom",
            description:
              "Trees absorb carbon dioxide from the atmosphere and provide numerous environmental benefits. Consider planting trees supporting reforestation efforts",
            link_rewrite: "plant-a-tree-on-treedom",
            image: "/images/activities/plant-a-tree-on-treedom.png",
            id_lang: { connect: { lang_short: "en" } },
          },
          {
            title: "Pianta un albero su Treedom",
            description:
              "Gli alberi assorbono l'anidride carbonica dall'atmosfera e forniscono numerosi benefici ambientali. Prendi in considerazione la possibilità di piantare alberi a sostegno degli sforzi di rimboschimento",
            link_rewrite: "pianta-un-albero-su-treedom",
            image: "https://re-leaf.vercel.app/images/activities/plant-a-tree-on-treedom.png",
            id_lang: { connect: { lang_short: "it" } },
          },
        ],
      },
    },
  })

  const activity3 = await prisma.activity.create({
    data: {
      eco_points: 10,
      activityLang: {
        create: [
          {
            title: "Buy local and seasonal products",
            description:
              "Choosing local and seasonal products helps reduce the carbon footprint associated with transportation and storage of food. It  supports local farmers",
            link_rewrite: "buy-local-and-seasonal-products",
            image:
              "https://re-leaf.vercel.app/images/activities/buy-local-and-seasonal-products.png",
            id_lang: { connect: { lang_short: "en" } },
          },
          {
            title: "Compra prodotti locali e stagionali",
            description:
              "La scelta di prodotti locali e stagionali aiuta a ridurre l'impronta di carbonio associata al trasporto e alla conservazione degli alimenti. Supporta gli agricoltori locali",
            link_rewrite: "compra-prodotti-locali-e-stagionali",
            image:
              "https://re-leaf.vercel.app/images/activities/buy-local-and-seasonal-products.png",
            id_lang: { connect: { lang_short: "it" } },
          },
        ],
      },
    },
  })

  if (log) {
    console.log(activity1, activity2, activity3)
  }

  return { activity1, activity2, activity3 }
}
