import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import SkillsRouter from "./routes/skills";
import cors from "cors";
import Skill from "./model/skills-schema";

dotenv.config();

const app: Express = express();
const port = process.env.PORT as string;
const DATABASE_URL = process.env.DATABASE_URL as string;
const allowedOrigins = ["http://localhost:3000"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));
app.use(bodyParser.json());
app.use(SkillsRouter);

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  await new Skill({
    title: "Mysql",
    level: "Begginer",
    description:
      "Have a basic experience with the mysql, and sequelize (framework of mysql)",
  }).save();
  res.send("Express + TypeScript Server Jee");
});

mongoose
  .connect(DATABASE_URL)
  .then(async () => {
    app.listen(port, () => {
      console.log(`[server]: Server is running at https://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
