import express from "express";
import { BLOG_URI } from "../utils/index";
import BlogModel from "../models/Blog";
import { jwtMiddleware, authorizeUser } from "../middlewares";

const router = express.Router();

// Post a new blog
router.post(`${BLOG_URI}`, jwtMiddleware, async (req, res) => {
  const { title, content } = req.body;
  // @ts-ignore
  const author = req.userId;
  const blog = new BlogModel({ title, content, author });

  await blog
    .save()
    .then((blogPost) => {
      res.status(201).json(blogPost);
    })
    .catch((err) => {
      if (err) return res.status(400).send(err);
    });
});

// Get paginated and sorted blog posts
router.get(`${BLOG_URI}`, (req, res) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const sort = req.query.sort || "-createDate";
  BlogModel.find()
    // @ts-ignore
    .sort(sort)
    .limit(limit)
    .skip((page - 1) * limit)
    .exec()
    .then((blogs: any) => {
      res.status(200).json(blogs);
    })
    .catch((err: any) => {
      res.status(500).send(err);
    });
});

// Update a blog post
router.put(`${BLOG_URI}/:id`, jwtMiddleware, authorizeUser, (req, res) => {
  const blogId = req.params.id;
  BlogModel.findByIdAndUpdate(blogId, req.body, { new: true })
    .exec()
    .then((blog: any) => {
      res.status(200).json(blog);
    })
    .catch((err: any) => {
      if (err) return res.status(500).send(err);
    });
});

// Delete a blog post
router.delete(`${BLOG_URI}/:id`, jwtMiddleware, authorizeUser, (req, res) => {
  const blogId = req.params.id;
  BlogModel.findByIdAndRemove(blogId, (err: any, _blog: any) => {
    if (err) return res.status(500).send(err);
    res.status(204).send();
  });
});

export default router;
