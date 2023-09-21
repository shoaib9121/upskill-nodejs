import { IBook } from "./types";

class Book {
  protected title;
  protected author;
  protected price;

  constructor(props: IBook) {
    const { title, author, price } = props;
    this.title = title;
    this.author = author;
    this.price = price;
  }

  setTitle(title: string) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  setAuthor(author: string) {
    this.author = author;
  }

  getAuthor() {
    return this.author;
  }

  setPrice(price: number) {
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  displayDetails() {
    return `Title: ${this.title}, Author: ${this.author} Price: $${this.price.toFixed(2)}`;
  }
}

export default Book;
