"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const skills_1 = require("../controller/skills");
const router = (0, express_1.Router)();
router.get("/skills", skills_1.getSkills);
exports.default = router;
