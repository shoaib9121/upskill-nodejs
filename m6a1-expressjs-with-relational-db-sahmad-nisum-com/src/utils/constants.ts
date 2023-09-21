import { BookType } from "../Book";
import { IUser } from "../User";

export const CONSOLE_LOG_SPACER = "\n";

export const CART_URI = "/cart";
export const BOOK_URI = "/books";
export const USER_URI = "/users";

export const mockUser: IUser = {
  username: "shoaib9121",
  password: "1234",
  name: "Shoaib",
  email: "abc@xyz.com",
  address: "some dummy address",
  isLoggedIn: false,
};

export const mockNewBook: BookType = {
  title: "Title Hobit",
  author: "The Hawl",
  price: 150,
  quantity: 1,
};

export const mockBookData: BookType[] = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 200,
    quantity: 5,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 150,
    quantity: 5,
  },
  {
    title: "1984",
    author: "George Orwell",
    price: 250,
    quantity: 5,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 180,
    quantity: 5,
  },
];