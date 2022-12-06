import { Schema, model } from "mongoose";

interface ISkill {
  title: string;
  level: string;
  description: string;
}

const SkillSchema = new Schema<ISkill>({
  title: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Skill = model<ISkill>("Skill", SkillSchema);

export default Skill;
