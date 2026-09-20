import { PrismaClient } from "./generated/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import fs from "node:fs";
import path from "node:path";
import dotenv from "dotenv";

const envPath = [
    path.resolve(process.cwd(), "packages/prisma/.env"),
    path.resolve(process.cwd(), "../../packages/prisma/.env"),
].find((candidate) => fs.existsSync(candidate));

dotenv.config({ path: envPath });

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
})

export const client = new PrismaClient({
    adapter
});