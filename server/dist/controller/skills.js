"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSkills = void 0;
const skills_schema_1 = __importDefault(require("../model/skills-schema"));
const getSkills = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skills = yield skills_schema_1.default.find();
        const filteredSkills = skills.map((item) => ({
            title: item.title,
            level: item.level,
            description: item.description,
        }));
        res.status(200).json(filteredSkills);
    }
    catch (err) {
        console.log(err);
    }
});
exports.getSkills = getSkills;
