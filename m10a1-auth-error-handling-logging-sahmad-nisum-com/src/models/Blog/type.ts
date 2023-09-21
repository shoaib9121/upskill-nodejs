import { ObjectId } from "mongodb";

export interface BlogType {
  _id?: ObjectId;
  title: string;
  content: string;
  author: string;
  tags: string[];
  createDate?: string;
  categoryId?: string | number;
}