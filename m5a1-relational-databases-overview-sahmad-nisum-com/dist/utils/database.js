"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const options = {
    host: "localhost",
    user: "root",
    database: "book-store",
    password: "12345678",
};
const pool = mysql2_1.default.createPool(options);
exports.default = pool.promise();
