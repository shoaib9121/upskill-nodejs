"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { mockBlogData } from "./constants";
const blog_1 = require("./services/blog");
// const getBlogs = require("./services/blog");
// const AxiosModule = require("./modules/axios");
// export { default } from "./server";
// const blogs = [] as BlogType[];
// const newBlog: BlogType = {
//   id: 7,
//   title: "Sample Blog 7",
//   content: "This is the content of Sample Blog 7.",
//   username: "user7",
//   views: 1000,
// };
// const blog = new Blog(newBlog);
// postBlog(blog).then((data) => {
//   console.log("Successfully posted new blog", data);
// });
(0, blog_1.getBlogs)().then((data) => {
    console.log("All blogs", data);
});
// blogs.push(blog);
// console.log(blogs);
