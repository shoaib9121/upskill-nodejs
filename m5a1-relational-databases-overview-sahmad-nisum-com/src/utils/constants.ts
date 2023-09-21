import { IBook } from "../Book";
import { IUser } from "../User";

export const CONSOLE_LOG_SPACER = "\n";

export const mockUser: IUser = {
  username: "shoaib9121",
  password: "1234",
  name: "Shoaib",
  email: "abc@xyz.com",
  address: "some dummy address",
  isLoggedIn: false,
};

export const mockNewBook: IBook = {
  title: "The Robot",
  author: "Prince Hawl",
  price: 450,
  quantity: 5,
};
