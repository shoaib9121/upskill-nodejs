import { ObjectId } from "mongodb";
import { BlogType } from "./type";

export default class Blog {
  title: string;
  content: string;
  author: string;
  tags: string[];
  createDate: string | undefined;
  id?: ObjectId;
  constructor(props: BlogType) {
    const { title, content, author, tags, createDate } = props;
    this.title = title;
    this.content = content;
    this.author = author;
    this.tags = tags;
    this.createDate = createDate;
  }
}
