const { PrismaClient } = require("@prisma/client")

/** @type PrismaClient  */
const client = global.prismadb || new PrismaClient()

if (process.env.NODE_ENV === "production") global.prismadb = client

module.exports = client
