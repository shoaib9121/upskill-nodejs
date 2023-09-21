import { executeQuery, executeQueryFromPath } from "./utils";
import { CONSOLE_LOG_SPACER, mockNewBook } from "./utils/constants";
import Book from "./Book";

const book = new Book(mockNewBook);
console.log("====================================================================================");
console.log("STANDARD QUERIES");
console.log("====================================================================================");
console.log(CONSOLE_LOG_SPACER);

/**
 * **************************************************
 * STANDARD QUERIES
 * **************************************************
 */
// executeQueryFromPath("../queries/getAllBooks.sql");
// executeQueryFromPath("../queries/getBookById.sql");
// executeQueryFromPath("../queries/getAllUsers.sql");
// executeQueryFromPath("../queries/getUserById.sql");
// executeQueryFromPath("../queries/getUserCart.sql");
// executeQueryFromPath("../queries/AddBookToUserCart.sql");
// executeQueryFromPath("../queries/removeBookFromUserCart.sql");


console.log("====================================================================================");
console.log("VIEWS");
console.log("====================================================================================");
console.log(CONSOLE_LOG_SPACER);
/**
 * **************************************************
 * VIEWS
 * **************************************************
 */
// executeQueryFromPath("../views/shoppingCartView.sql");
// executeQuery("SELECT * FROM shoping_cart_view;");
// executeQueryFromPath("../views/ordersView.sql");
// executeQuery("SELECT * FROM orders_view;");

console.log("====================================================================================");
console.log("STORED PROCEDURES");
console.log("====================================================================================");
console.log(CONSOLE_LOG_SPACER);

/**
 * **************************************************
 * STORED PROCEDURES
 * **************************************************
 */
executeQueryFromPath("../procedures/createOrderProcedure.sql");
executeQueryFromPath("../procedures/executeOrderProcedure.sql");

console.log("====================================================================================");
console.log("TRIGGERS");
console.log("====================================================================================");
console.log(CONSOLE_LOG_SPACER);

/**
 * **************************************************
 * TRIGGERS
 * **************************************************
 */
executeQueryFromPath("../triggers/decreaseBookQuantity.sql");