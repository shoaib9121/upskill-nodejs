[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11718298&assignment_repo_type=AssignmentRepo)
# M10A1 - Auth, Error Handling &amp; Logging

## Assignment:
In this assignment, you will be building an authentication and authorization system for a blogging platform using Node.js.

### Task 1: User Registration and Login
Implement a user registration functionality where users can sign up by providing their username and password.
Store the user information securely in a database (e.g., MongoDB).
Implement user login functionality with proper error handling and validation.
Generate and return a JWT upon successful authentication.

### Task 2: Protected Routes and Authorization
Create protected routes that require authentication to access.
Implement middleware that verifies the JWT and grants access only to authenticated users.
Define different roles (e.g., admin, author, reader) and implement role-based authorization to restrict access to specific routes.

### Task 3: Error Handling and Exception Management
Implement a global error handler middleware to handle errors and exceptions in a centralized manner.
Customize error responses for various types of errors (e.g., authentication errors, validation errors).

### Task 4: Logging and Debugging
Integrate the Morgan middleware for logging HTTP requests and responses.
Implement different log levels and configure logging to capture relevant information for debugging purposes.
Demonstrate the use of logging in real-time scenarios, such as tracking user activities or identifying errors.
