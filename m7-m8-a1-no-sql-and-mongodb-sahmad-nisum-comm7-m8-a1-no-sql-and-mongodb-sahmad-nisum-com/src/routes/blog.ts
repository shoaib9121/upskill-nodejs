import express, { Request, Response } from "express";
import { AGGREGATION_TYPE, BLOG_URI, CHILD_URI, getMostViewedBlogs, getRecentBlogs } from "../utils/index";
import { BlogType } from "../models/Blog/type";
import { collections } from "../services/database";
import Blog from "../models/Blog";

const router = express.Router();

// Fetch most recent and viewed blogs
router.get(`${CHILD_URI.AGGREGATED_DATA}`, async (req: Request, res: Response) => {
  try {
    const type = req.query.type;
    let blogs;

    if (type === AGGREGATION_TYPE.RECENT_BLOGS) {
      blogs = await getRecentBlogs();
    } else if (type === AGGREGATION_TYPE.MOST_VIEWED_BLOGS) {
      blogs = await getMostViewedBlogs();
    }
    res.status(200).send(blogs);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Fetch all blogs
router.get(`${BLOG_URI}`, async (_req: Request, res: Response) => {
  try {
    const blogs = (await collections.blogs?.find({}).toArray()) as BlogType[];
    console.log("get all blogs", blogs);
    res.status(200).send(blogs);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Post a new blog
router.post(`${BLOG_URI}`, async (req: Request, res: Response) => {
  try {
    const newBlog = req.body as Blog;
    const createDate = new Date().toISOString();
    const result = await collections.blogs?.insertOne({ ...newBlog, createDate });

    result
      ? res.status(201).send(`Successfully created a new blog with id ${result.insertedId}`)
      : res.status(500).send("Failed to create a new blog.");
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
