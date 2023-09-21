[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/lVtkL3SQ)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11487212&assignment_repo_type=AssignmentRepo)
# M4A1 - RESTful APIs with Express NodeJs

## Assignment 
Build a RESTful API for a Blogging Platform. In this assignment, you will create a blogging platform using Node.js and Express. The platform will allow users to create, read, update, and delete blog posts through RESTful API endpoints.


## Tasks:

- Set up a basic Express application and configure it to listen on a specified port.
- Configure typescript in the Express app.
- Create a blog class, with ID, title, content, username and views property. Maintain an in-memory list of blogs which will be modified by the following APIs:
- Create an API route to handle GET requests for retrieving all blog posts. The response should include a JSON array of blog post objects.
- Implement an API route to handle GET requests for retrieving a single blog post by its ID. The response should include a JSON object representing the blog post.
- Create an API route to handle POST requests for creating a new blog post. The request body should contain the necessary information for the new blog post, such as title, content, and author.
- Implement an API route to handle PUT requests for updating an existing blog post by its ID. The request body should contain the updated information for the blog post.
- Create an API route to handle DELETE requests for deleting a blog post by its ID.
- Add an permission middleware to allow or deny user to the POST and PUT urls, if the header doesnt have a user id
