var express = require("express")
var router = express.Router()
const prisma = require("../../../lib/prismadb.js")

/* GET /api/v1/activities */
router.get("/", async (req, res) => {
  const { offset, limit, lang } = req.query

  const activities = await prisma.activity.findMany({
    take: Number(limit) || undefined,
    skip: Number(offset) || undefined,
    select: {
      id: true,
      eco_points: true,
      activityLang: {
        select: {
          title: true,
          description: true,
          image: true,
        },
        where: { id_lang: { lang_short: lang } },
      },
    },
  })
  console.log(activities)

  if (activities) {
    const activitiesMapped = activities.map((act) => {
      if (act.activityLang.length > 1) {
        return { id: act.id, eco_points: act.eco_points, langs: act.activityLang }
      } else {
        return { id: act.id, eco_points: act.eco_points, ...act.activityLang[0] }
      }
    })

    if (activitiesMapped) {
      res.status(200).json(activitiesMapped)
    } else {
      res.status(400).json({ message: "error" })
    }
  } else {
    res.status(200).json([])
    return
  }
})

module.exports = router

/* POST /api/v1/activities */

router.post("/", async (req, res) => {
  const { ecoPoints, langs } = req.body
  try {
    const activity = await prisma.activity.create({
      data: {
        eco_points: ecoPoints,
        activityLang: {
          create: [
            {
              ...langs[0],
              id_lang: { connect: { lang_short: "en" } },
            },
            {
              ...langs[1],
              id_lang: { connect: { lang_short: "it" } },
            },
          ],
        },
      },
    })
    res.status(200).json({ activity })
  } catch (err) {
    console.log(err)
    res.status(401).json({ msg: err })
  }
})

/* DELETE /api/v1/activities */

router.delete("/", async (req, res) => {
  const { id } = req.body
  try {
    const activity = await prisma.activity.delete({
      where: {
        id,
      },
    })
    res.status(200).json({ activity })
  } catch (err) {
    console.log(err)
    res.status(401).json({ msg: err })
  }
})
