import Skill from "../model/skills-schema";
import { Request, Response } from "express";

export const getSkills = async (req: Request, res: Response) => {
  try {
    const skills = await Skill.find();
    const filteredSkills = skills.map((item) => ({
      title: item.title,
      level: item.level,
      description: item.description,
    }));

    res.status(200).json(filteredSkills);
  } catch (err) {
    console.log(err);
  }
};
