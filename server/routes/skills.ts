import { Router } from "express";
import { getSkills } from "../controller/skills";
const router = Router();

router.get("/skills", getSkills);

export default router;
