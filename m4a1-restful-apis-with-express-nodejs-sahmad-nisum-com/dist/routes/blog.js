"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_URI = void 0;
const express_1 = __importDefault(require("express"));
const constants_1 = require("../constants");
exports.API_URI = "/blogs";
const router = express_1.default.Router();
router.post(exports.API_URI, (req, res) => {
    const data = req.body;
    if (!constants_1.mockBlogData.find((item) => item.id === data.id)) {
        constants_1.mockBlogData.push(data);
    }
    res.json(data);
});
router.put(`${exports.API_URI}/:id`, (req, res) => {
    const id = +req.params.id;
    const data = req.body;
    const recordIndex = constants_1.mockBlogData.findIndex((item) => item.id === id);
    console.log('recordIndex', recordIndex);
    if (recordIndex !== -1) {
        constants_1.mockBlogData[recordIndex] = data;
    }
    console.log('mockBlogData', constants_1.mockBlogData);
    res.json(data);
});
router.get(`${exports.API_URI}/:id`, (req, res) => {
    const id = +req.params.id;
    const blog = constants_1.mockBlogData.find((item) => item.id === id);
    if (blog) {
        return res.json(blog);
    }
    res.status(404).json({ error: "Blog not found" });
});
router.get(exports.API_URI, (_req, res) => {
    res.json(constants_1.mockBlogData);
});
exports.default = router;
