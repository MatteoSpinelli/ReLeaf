var express = require("express")
var router = express.Router()
const prisma = require("../../../lib/prismadb.js")

/* GET /api/v1/activities */
router.get("/", async (req, res, next) => {
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
          link_rewrite: true,
        },
        where: { id_lang: { lang_short: lang } },
      },
    },
  })

  if (!activities) {
    res.status(200).json([])
    return
  }

  const activitiesMapped = activities.map((act) => {
    if (act.activityLang.length > 1) {
      return { id: act.id, eco_points: act.eco_points, langs: act.activityLang }
    } else {
      return { id: act.id, eco_points: act.eco_points, ...act.activityLang[0] }
    }
  })

  res.status(200).json(activitiesMapped)
})

module.exports = router
