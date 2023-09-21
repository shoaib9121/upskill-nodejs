import { UserType } from "models/User";
import { BlogType } from "../models/Blog";

export const CONSOLE_LOG_SPACER = "\n";

export enum AGGREGATION_TYPE {
  RECENT_BLOGS = "recent-blogs",
  MOST_VIEWED_BLOGS = "most-viewed-blogs",
}

export enum BLOG_CATEGORY {
  TRAVEL = "travel",
  FOOD = "food",
  FITNESS = "fitness",
  HEALTH = "health",
}
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "defaultDummySecret";

export const BLOG_URI = "/blogs";
export const USER_URI = "/user";

export const CHILD_URI = {
  AGGREGATED_DATA: `${BLOG_URI}/aggregated-data`,
};

export const mockNewBlog: BlogType = {
  title: "Blog Title New",
  author: "G. Robert",
  content: "This is the content",
  tags: ["english", "urdu"],
};

export const sampleUserData: UserType = {
  username: "abc123",
  email: "abc@example.com",
  password: "1234"
};

export const sampleBlogsData = [
  {
    title: "Journal",
    author: "Ali",
    content: "this is content journal",
    views: 25,
    tags: ["blank", "red"],
    createDate: "2023-08-22T06:04:27.557Z",
  },
  {
    title: "Excercise Daily",
    author: "Ali",
    content: "this is content notebook",
    views: 50,
    tags: ["red", "blank"],
    createDate: "2023-08-20T12:10:27.557Z",
  },
  {
    title: "Journey",
    author: "Ali",
    content: "this is content paper",
    views: 100,
    tags: ["red", "blank", "plain"],
    createDate: "2023-08-07T21:20:27.557Z",
  },
  {
    title: "planner",
    author: "Shoaib",
    content: "this is content planner",
    views: 75,
    tags: ["blank", "red"],
    createDate: "2023-07-25T02:40:27.557Z",
  },
  {
    title: "Burger",
    author: "John",
    content: "this is content postcard",
    views: 45,
    tags: ["blue"],
    createDate: "2023-07-17T12:40:27.557Z",
  },
];
