import { executeQuery, executeQueryFromPath, logResults } from "./utils";
import { CONSOLE_LOG_SPACER, mockNewBook, mockBookData, mockUser } from "./utils/constants";
import { postBook, getBooks, putBook, getBookById, deleteBookById } from "./services/book";
import Book, { BookType } from "./Book";
import { Book as BookEntity } from "./entities";
import { getUserCart, postBookToCart, removeBookFromUserCart } from "./services/cart";
import { placeOrder } from "./services/order";
import { getUsers, postNewUser } from "./services/user";
import { Cart, CartItems } from "./entities";
export { default } from "./utils/server";
/**
 * **************************************************
 * DISPLAY RESULTS
 * **************************************************
 */
console.log("====================================================================================");
console.log("DISPLAY RESULTS");
console.log("====================================================================================");
console.log(CONSOLE_LOG_SPACER);

const book = new Book(mockNewBook);

getBooks().then((data: BookType[]) => {
  logResults("All books fetched", data);
});

getBookById({...mockBookData[1], id: 2}).then((data: BookType[]) => {
  logResults("Book by id fetched", data);
})

postBook(book).then((data) => {
  if (!data) {
    return;
  }
  logResults("Successfully posted a new book", data);
});

putBook({ ...mockBookData[1], quantity: 93, id: 2 }).then((data: BookType) => {
  if (!data) {
    return;
  }
  logResults("Existing Blog updated", data);
});

deleteBookById({...mockBookData[0], id: 2}).then((data: BookType) => {
  logResults("Book by Id deleted", data);
});

getUsers().then(async (data: any[]) => {
  logResults("Users retrieved", data);
});

postNewUser(mockUser).then((data: BookType[]) => {
  logResults("User cart retrieved", data);
})

getUserCart(1).then((data: BookType[]) => {
  logResults("User cart retrieved", data);
})

postBookToCart(mockUser).then((data: BookType[]) => {
  logResults("Book added to user cart", data);
});

// Below method used for mysql
postBookToCart({ ...mockBookData[2], book_id: 1, user_id: 1 }).then((data: BookType[]) => {
  logResults("Book added to user cart", data);
});

removeBookFromUserCart({cart_id: 1, book_id: 3}).then((data: BookType[]) => {
  logResults("Book removed from user cart", data);
})

placeOrder({user_id: 1}).then((data: BookType[]) => {
  logResults("Order placed", data);
})
