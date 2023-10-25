

import { Request, Response, NextFunction } from "express";
import BlogModel from "../models/Blog";

export const authorizeUser = (req: Request, res: Response, next: NextFunction) => {
  const postId = req.params.id;
  // @ts-ignore
  const userId = req.user._id;

  BlogModel.findById(postId, (err: any, blog: any) => {
    if (err || !blog) return res.status(404).send("Blog not found");
    if (blog.author.toString() !== userId) return res.status(403).send("Unauthorized. User is not the author of the blog.");
    next();
  });
};