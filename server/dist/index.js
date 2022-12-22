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
const body_parser_1 = __importDefault(require("body-parser"));
const skills_1 = __importDefault(require("./routes/skills"));
const cors_1 = __importDefault(require("cors"));
const skills_schema_1 = __importDefault(require("./model/skills-schema"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
const allowedOrigins = ["http://localhost:3000"];
const options = {
    origin: allowedOrigins,
};
app.use((0, cors_1.default)(options));
app.use(body_parser_1.default.json());
app.use(skills_1.default);
app.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield new skills_schema_1.default({
        title: "Mysql",
        level: "Begginer",
        description: "Have a basic experience with the mysql, and sequelize (framework of mysql)",
    }).save();
    res.send("Express + TypeScript Server Jee");
}));
mongoose_1.default
    .connect(DATABASE_URL)
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    app.listen(port, () => {
        console.log(`[server]: Server is running at https://localhost:${port}`);
    });
}))
    .catch((err) => {
    console.log(err);
});
