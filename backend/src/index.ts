import "dotenv/config";
import {PrismaClient, ProductType} from "@prisma/client";
import express from "express";

const app = express();
const port = Number(process.env.PORT) || 3001;

const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
