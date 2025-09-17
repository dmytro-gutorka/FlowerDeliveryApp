import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { routes } from "./routes";
import  {clientId} from "./middlewares/clientId";
import cookieParser from 'cookie-parser'
import express from "express";
import cors from 'cors'

const app = express();
const port = Number(process.env.PORT) || 3001;
export const prisma = new PrismaClient();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(clientId)

app.use('/api/v1', routes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
