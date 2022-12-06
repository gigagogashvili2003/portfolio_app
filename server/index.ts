import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import Skill from "./model/skills-schema";

dotenv.config();

const app: Express = express();
const port = process.env.PORT as string;
const DATABASE_URL = process.env.DATABASE_URL as string;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server Jee");
});

mongoose
  .connect(DATABASE_URL)
  .then(async () => {
    app.listen(port, () => {
      console.log(`[server]: Server is running at https://localhost:${port}`);
    });

    const skill = new Skill({
      title: "HTML",
      level: "Experienced",
      description:
        "Have created bunch of projects with HTML, also Graduated Frontend course at Acacemy of Digital Industries, Where I learned HTML.",
    });
    await skill.save();
  })
  .catch((err) => {
    console.log(err);
  });
