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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const skills_schema_1 = __importDefault(require("./model/skills-schema"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server Jee");
});
mongoose_1.default
    .connect(DATABASE_URL)
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    app.listen(port, () => {
        console.log(`[server]: Server is running at https://localhost:${port}`);
    });
    const skill = new skills_schema_1.default({
        title: "HTML",
        level: "Experienced",
        description: "HELLO WORLD",
    });
    yield skill.save();
}))
    .catch((err) => {
    console.log(err);
});
