"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const constants_1 = require("./utils/constants");
const book_1 = require("./services/book");
const Book_1 = __importDefault(require("./Book"));
var server_1 = require("./utils/server");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(server_1).default; } });
console.log("====================================================================================");
console.log("DISPLAY RESULTS");
console.log("====================================================================================");
console.log(constants_1.CONSOLE_LOG_SPACER);
const book = new Book_1.default(constants_1.mockNewBook);
(0, book_1.getBooks)().then((data) => {
    console.log("====================================================================================");
    console.log("All books fetched");
    console.log("====================================================================================");
    console.log(constants_1.CONSOLE_LOG_SPACER);
});
