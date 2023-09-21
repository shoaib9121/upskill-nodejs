"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = __importDefault(require("../Book/Book"));
const Ebook_1 = __importDefault(require("../Ebook"));
class BookFactory {
    static createBook(bookData) {
        if ("format" in bookData) {
            return new Ebook_1.default(bookData);
        }
        else {
            return new Book_1.default(bookData);
        }
    }
}
exports.default = BookFactory;
