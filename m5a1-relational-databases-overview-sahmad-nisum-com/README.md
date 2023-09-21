[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/WDvpWGCN)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11511755&assignment_repo_type=AssignmentRepo)
# M5A1 - Relational databases overview

## Assignment
Design a Database for a Book Store Purchase Flow
Description: In this assignment, you will design a relational database schema to support the purchase flow of a book store. The database should store information about books, users, shopping carts, and orders. You will define the relationships between these entities and write SQL queries to retrieve and manipulate data.

## Tasks
1- Design the database schema using MySQL to represent the following entities:
- Books: Store information about books such as book ID, title, author, price, and quantity available.
- Users: Store information about users such as user ID, name, email, and address.
- Shopping Carts: Store information about user shopping carts such as cart ID and associated user ID.
- Cart Items: Store information about individual items in a shopping cart such as item ID, cart ID, book ID, quantity, and price.
- Orders: Store information about completed orders such as order ID, user ID, order date, and total amount.
- Order Items: Store information about individual items within an order such as item ID, order ID, book ID, quantity, and price.

2- Define the relationships between the entities:
- A book can have multiple order items and cart items associated with it.
- A user can have multiple shopping carts and orders associated with them.
- A shopping cart can have multiple cart items associated with it.
- An order can have multiple order items associated with it.

3- Write SQL queries to perform the following operations:
- Retrieve all books from the database.
- Retrieve a specific book by its ID.
- Retrieve all users from the database.
- Retrieve a specific user by their ID.
- Retrieve the current shopping cart for a specific user.
- Add a book to a user's shopping cart.
- Remove a book from a user's shopping cart.

4- Implement indexes for query optimization

5- Implement shoppingCartView and OrderView to view and query ShoppingCarts and Orders along with their details

6- Write a stored procedure 'CreateOrder' to create an order from cart. Take UserId as input and return OrderId as output. 
- The stored procedure will retrieve the user's current cart by querying the shopping cart table by user id
- The stored procedure should calculate the sum of cart items and store it as total amount in the Orders table with the orderDate as current timestamp and the user Id.
- The stored procedure should also insert cartItems like BookId, Quantity & price into OrderItems table.
- It will empty the user's cart and cart items, once the order is inserted.
- It will set the orderId that will be returned as output.
This will be done in a single StoredProcedure.

7- Once an order is placed, write a trigger to decrease the quantity of the books from Book table. 
