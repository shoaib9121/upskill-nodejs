import express, { Request, Response } from "express";
import { mockBlogData } from "../constants";
import PermissionMiddleware from "../middlewares/permission";

export const API_URI = "/blogs";

const router = express.Router();

router.post(API_URI, PermissionMiddleware, (req: Request, res: Response) => {
  const data = req.body;

  if (!mockBlogData.find((item) => item.id === data.id)) {
    mockBlogData.push(data);
  }
  res.json(data);
});

router.put(`${API_URI}/:id`, PermissionMiddleware, (req: Request, res: Response) => {
  const id = +req.params.id;
  const data = req.body;
  const recordIndex = mockBlogData.findIndex((item) => item.id === id);
  
  if (recordIndex !== -1) {
    mockBlogData[recordIndex] = data;
  }
  res.json(data);
});

router.get(`${API_URI}/:id`, (req: Request, res: Response) => {
  const id = +req.params.id;

  const blog = mockBlogData.find((item) => item.id === id);
  if (blog) {
    return res.json(blog);
  }

  res.status(404).json({ error: "Blog not found" });
});

router.delete(`${API_URI}/:id`, (req: Request, res: Response) => {
  const id = +req.params.id;

  const recordIndex = mockBlogData.findIndex((item) => item.id === id);
  
  if (recordIndex !== -1) {
    mockBlogData.splice(recordIndex, 1)
  }
  
  if (recordIndex !== -1) {
    return res.json(mockBlogData);
  }

  res.status(404).json({ error: "Blog not found" });
});

router.get(API_URI, (_req: Request, res: Response) => {
  res.json(mockBlogData);
});

export default router;
