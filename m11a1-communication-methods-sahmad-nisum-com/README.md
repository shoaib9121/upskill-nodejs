[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/RWqHaeeH)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11760447&assignment_repo_type=AssignmentRepo)
# M11A1 - Communication methods

## Assignment 

### Task 1:Realtime chat application with socket io
Create a simple chat application with socket io. Create a node server on which client apps will use to register themselves using websockets. The server will log the client id when the connection is made. The UI will have a simple input box and a send button which will send the message to the server using sockets. It will also have a display window where the messages received from the server will be shown. The UI will be a static route served by node js itself. you can use simple html pages or a templating enging  like hbs or ejs with the node server.

### Task 2: Asynchronous Processing with Message Queues
Integrate a message queue (e.g., RabbitMQ) into the blogging platform for asynchronous processing of tasks.
Implement a task queue for sending email notifications to the author when there is a comment on his blog post.
Demonstrate the asynchronous nature of the message queue by processing tasks in the background without blocking the main application flow. For this, create a console application that subscribes to the email queue and logs out a message when an email is being sent.
Monitor the progress and completion of queued tasks and handle any potential errors or failures.
