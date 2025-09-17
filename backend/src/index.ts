import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { routes } from "./routes";
import cookieParser from 'cookie-parser'
import express from "express";
import generateUid from "./middlewares/generateUid";

const app = express();
const port = Number(process.env.PORT) || 3001;
export const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(generateUid)

app.use('/api/v1', routes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
