"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockEbooks = exports.mockBooks = exports.mockNewEbook = exports.mockNewBook = exports.mockUser = exports.CONSOLE_LOG_SPACER = void 0;
const Book_1 = require("./Book");
exports.CONSOLE_LOG_SPACER = '\n';
exports.mockUser = { username: 'shoaib9121', password: '1234', name: "Shoaib", email: "abc@xyz.com", address: "some dummy address", isLoggedIn: false };
exports.mockNewBook = {
    title: "The Robot",
    author: "Prince Hawl",
    price: 450,
    genre: Book_1.GENRE.FICTION,
    coverImage: "imageurl",
    description: "This is the description of book",
    rating: 5,
};
exports.mockNewEbook = {
    title: "Titanic",
    author: "Hawl",
    price: 150,
    genre: Book_1.GENRE.DRAMA,
    format: "pdf",
    coverImage: "imageurl",
    description: "This is the description of book",
    rating: 5,
};
exports.mockBooks = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: Book_1.GENRE.FANTASY,
        price: 200,
        coverImage: "imageurl",
        description: "This is the description of book",
        rating: 5,
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: Book_1.GENRE.THRILLER,
        price: 150,
        coverImage: "imageurl",
        description: "This is the description of book",
        rating: 5,
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: Book_1.GENRE.NON_FICTION,
        price: 250,
        coverImage: "imageurl",
        description: "This is the description of book",
        rating: 5,
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: Book_1.GENRE.ROMANCE,
        price: 180,
        coverImage: "imageurl",
        description: "This is the description of book",
        rating: 5,
    },
];
exports.mockEbooks = [
    {
        title: "EBook - The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: Book_1.GENRE.FANTASY,
        price: 200,
        format: "pdf",
        coverImage: "imageurl",
        description: "This is the description of book",
        rating: 5,
    },
    {
        title: "EBook - To Kill a Mockingbird",
        author: "Harper Lee",
        genre: Book_1.GENRE.FANTASY,
        price: 150,
        format: "pdf",
        coverImage: "imageurl",
        description: "This is the description of book",
        rating: 5,
    },
    {
        title: "EBook - 1984",
        author: "George Orwell",
        genre: Book_1.GENRE.FANTASY,
        price: 250,
        format: "pdf",
        coverImage: "imageurl",
        description: "This is the description of book",
        rating: 5,
    },
    {
        title: "EBook - Pride and Prejudice",
        author: "Jane Austen",
        genre: Book_1.GENRE.MYSTERY,
        price: 180,
        format: "word",
        coverImage: "imageurl",
        description: "This is the description of book",
        rating: 5,
    },
];
