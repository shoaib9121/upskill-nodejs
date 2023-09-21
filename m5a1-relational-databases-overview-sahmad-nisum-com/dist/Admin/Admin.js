"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BookFactory_1 = __importDefault(require("../BookFactory"));
class Admin {
    constructor() {
        this.books = [];
    }
    addBooks(allBooks) {
        allBooks.forEach((book) => {
            const bookInstance = BookFactory_1.default.createBook(book);
            this.addBook(bookInstance);
        });
    }
    addBook(book) {
        this.books.push(book);
    }
    updateBook(book) {
        this.books = this.books.map((item) => {
            if (item.getTitle().toLowerCase() === book.getTitle().toLowerCase()) {
                item.setTitle(book.getTitle());
                item.setGenre(book.getGenre());
                item.setAuthor(book.getAuthor());
                item.setPrice(book.getPrice());
                return item;
            }
            return item;
        });
    }
    removeBook(book) {
        const index = this.books.findIndex((item) => item.getTitle().toLowerCase() === book.getTitle().toLowerCase());
        if (index !== -1) {
            this.books.splice(index, 1);
        }
        else {
            console.log("Book not found");
        }
    }
    getAllBooks() {
        return this.books;
    }
}
exports.default = Admin;
