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
exports.deleteBookById = exports.getBookById = exports.putBook = exports.postBook = exports.getBooks = void 0;
const axios_1 = __importDefault(require("axios"));
const book_1 = require("../routes/book");
const utils_1 = require("../utils");
const BASE_URL = "http://localhost:8000";
const headers = {
    "Content-Type": "application/json",
};
const getBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${BASE_URL}${book_1.API_URI}`);
        return response.data;
    }
    catch (error) {
        (0, utils_1.handleAxiosError)(error);
    }
});
exports.getBooks = getBooks;
const postBook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post(`${BASE_URL}${book_1.API_URI}`, Object.assign({}, data), { headers: Object.assign(Object.assign({}, headers), { user_id: 1 }) });
        return response.data;
    }
    catch (error) {
        (0, utils_1.handleAxiosError)(error);
    }
});
exports.postBook = postBook;
const putBook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = data;
        const response = yield axios_1.default.put(`${BASE_URL}${book_1.API_URI}/${id}`, Object.assign({}, data), { headers: Object.assign(Object.assign({}, headers), { user_id: 1 }) });
        return response.data;
    }
    catch (error) {
        (0, utils_1.handleAxiosError)(error);
    }
});
exports.putBook = putBook;
const getBookById = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = data;
        const response = yield axios_1.default.get(`${BASE_URL}${book_1.API_URI}/${id}`, { headers });
        return response.data;
    }
    catch (error) {
        (0, utils_1.handleAxiosError)(error);
    }
});
exports.getBookById = getBookById;
const deleteBookById = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = data;
        const response = yield axios_1.default.delete(`${BASE_URL}${book_1.API_URI}/${id}`, { headers });
        return response.data;
    }
    catch (error) {
        (0, utils_1.handleAxiosError)(error);
    }
});
exports.deleteBookById = deleteBookById;
