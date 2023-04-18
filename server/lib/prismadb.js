const { PrismaClient } = require("@prisma/client");

const client = global.prismadb || new PrismaClient();

if (process.env.NODE_ENV === "production") global.prismadb = client;

module.exports = client;
