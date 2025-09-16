import "dotenv/config";
import express from "express";
import { routes } from "./routes";
import {PrismaClient} from "@prisma/client";

const app = express();
const port = Number(process.env.PORT) || 3001;
export const prisma = new PrismaClient();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
