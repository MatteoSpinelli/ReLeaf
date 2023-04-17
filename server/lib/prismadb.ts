import { PrismaClient } from "@prisma/client";

declare const global: Global & { prismadb?: PrismaClient };

const client = global.prismadb || new PrismaClient();

if (process.env.NODE_ENV === "production") global.prismadb = client;

export default client;
