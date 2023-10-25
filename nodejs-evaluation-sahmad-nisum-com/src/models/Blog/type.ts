import { ObjectId } from "mongodb";
import { Document } from 'mongoose';

export interface BlogType extends Document {
  _id?: ObjectId;
  title: string;
  content: string;
  author: string;
  createDate?: string;
  categoryId?: string | number;
}