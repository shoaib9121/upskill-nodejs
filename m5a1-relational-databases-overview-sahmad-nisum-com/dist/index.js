"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const queries_1 = require("utils/queries");
const constants_1 = require("utils/constants");
const Book_1 = __importDefault(require("./Book"));
const book = new Book_1.default(constants_1.mockNewBook);
console.log("====================================================================================");
console.log("DISPLAY BOOK DETAILS");
console.log("====================================================================================");
console.log(constants_1.CONSOLE_LOG_SPACER);
const getAllBooks = "SELECT * FROM books";
(0, queries_1.queryPromise)(getAllBooks);
