"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const blog_1 = __importDefault(require("./routes/blog"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(express_1.default.json());
app.use(blog_1.default);
app.get("/", (req, res) => {
    res.send("Express app is running");
});
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});
exports.default = app;
