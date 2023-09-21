"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_URI = void 0;
const express_1 = __importDefault(require("express"));
const constants_1 = require("../utils/constants");
const permission_1 = __importDefault(require("../middlewares/permission"));
const utils_1 = require("../utils");
exports.API_URI = "/books";
const router = express_1.default.Router();
router.post(exports.API_URI, permission_1.default, (req, res) => {
    const data = req.body;
    if (!constants_1.mockBookData.find((item) => item.id === data.id)) {
        constants_1.mockBookData.push(data);
    }
    res.json(data);
});
router.put(`${exports.API_URI}/:id`, permission_1.default, (req, res) => {
    const id = +req.params.id;
    const data = req.body;
    const recordIndex = constants_1.mockBookData.findIndex((item) => item.id === id);
    if (recordIndex !== -1) {
        constants_1.mockBookData[recordIndex] = data;
    }
    res.json(data);
});
router.get(`${exports.API_URI}/:id`, (req, res) => {
    const id = +req.params.id;
    const book = constants_1.mockBookData.find((item) => item.id === id);
    if (book) {
        return res.json(book);
    }
    res.status(404).json({ error: "Book not found" });
});
router.delete(`${exports.API_URI}/:id`, (req, res) => {
    const id = +req.params.id;
    const recordIndex = constants_1.mockBookData.findIndex((item) => item.id === id);
    if (recordIndex !== -1) {
        constants_1.mockBookData.splice(recordIndex, 1);
    }
    if (recordIndex !== -1) {
        return res.json(constants_1.mockBookData);
    }
    res.status(404).json({ error: "Book not found" });
});
router.get(exports.API_URI, (_req, res) => {
    (0, utils_1.executeQueryFromPath)("../queries/getAllBooks.sql");
    res.json(constants_1.mockBookData);
});
exports.default = router;
