import { BlogType } from "./types";

class Blog implements BlogType {
  id;
  title;
  content;
  views;
  username;

  constructor(props: BlogType) {
    const { id, title, content, username, views } = props;
    this.id = id;
    this.content = content;
    this.title = title;
    this.views = views;
    this.username = username;
  }
}

export default Blog;
