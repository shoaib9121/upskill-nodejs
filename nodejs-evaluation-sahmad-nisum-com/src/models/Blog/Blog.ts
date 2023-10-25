import mongoose from 'mongoose';
import { BlogType } from "./type";

const BlogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createDate: { type: Date, default: Date.now },
});

const BlogModel = mongoose.model<BlogType>('Blog', BlogSchema);

export default BlogModel;