"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(props) {
        const { title, author, price } = props;
        this.title = title;
        this.author = author;
        this.price = price;
    }
    setTitle(title) {
        this.title = title;
    }
    getTitle() {
        return this.title;
    }
    setAuthor(author) {
        this.author = author;
    }
    getAuthor() {
        return this.author;
    }
    setPrice(price) {
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    displayDetails() {
        return `Title: ${this.title}, Author: ${this.author} Price: $${this.price.toFixed(2)}`;
    }
}
exports.default = Book;
