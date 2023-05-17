const prisma = require("../../../lib/prismadb.js")
var express = require("express")
const { authStrictMiddleware } = require("../../../middlewares/auth.js")
var router = express.Router()

// GET /user/activities com
router.get("/activities", authStrictMiddleware, async (req, res) => {
  const user = req.user.data
  const { page = 0, limit = 5, lang, completed = false } = req.query
  const offset = page * limit
  // tutte le attività dell'utente completate e non
  // attività suggerite
  const activities = await prisma.activity.findMany({
    skip: offset || undefined,
    take: (Number(limit) !== 0 && Number(limit)) || undefined,
    select: {
      id: true,
      eco_points: true,
      activityLang: {
        select: {
          title: true,
          description: true,
          image: true,
        },
      },
    },
    where: {
      users: completed
        ? {
            some: { id: user.id },
          }
        : {
            none: { id: user.id },
          },
    },
  })
  const totalPages = Math.ceil(activities.length / limit)

  if (activities) {
    res.status(200).json({ activities, pagination: { currentPage: page, limit, totalPages } })
  }
})

// update attività da non completate a completate e viceversa
router.put("/activities/:activityId", authStrictMiddleware, async (req, res) => {
  const user = req.user.data
  const { completed = true } = req.query
  const { activityId } = req.params

  const activity = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      activities: completed
        ? {
            connect: { id: activityId },
          }
        : {
            disconnect: { id: activityId },
          },
    },
  })

  if (activity) {
    res.status(200).json({ msg: "Activity updated" })
  }
})

module.exports = router
