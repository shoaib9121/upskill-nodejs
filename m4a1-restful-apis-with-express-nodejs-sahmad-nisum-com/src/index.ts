import Blog from "./Blog/Blog";
import { BlogType } from "./Blog/types";
import { CONSOLE_LOG_SPACER, mockBlogData } from "./constants";
import { postBlog, getBlogs, putBlog, getBlogById, deleteBlogById } from "./services/blog";

export { default } from "./server";

const blogs = [] as BlogType[];

const newBlog: BlogType = {
  id: 7,
  title: "Sample Blog 7",
  content: "This is the content of Sample Blog 7.",
  username: "user7",
  views: 1000,
};

const blog = new Blog(newBlog);

postBlog(blog).then((data) => {
  if (!data) {
    return;
  }
  console.log(
    "===================================================================================="
  );
  console.log("Successfully posted a new blog");
  console.log(
    "===================================================================================="
  );
  console.log(data);
  console.log(CONSOLE_LOG_SPACER);
});

putBlog({ ...mockBlogData[1], title: "Blog 2 is updated" }).then((data: BlogType) => {
  if (!data) {
    return;
  }
  console.log(
    "===================================================================================="
  );
  console.log("Existinng Blog updated");
  console.log(
    "===================================================================================="
  );
  console.log(data);
  console.log(CONSOLE_LOG_SPACER);
});

getBlogById(mockBlogData[0]).then((data: BlogType) => {
  console.log(
    "===================================================================================="
  );
  console.log("Blog by Id fetched");
  console.log(
    "===================================================================================="
  );
  console.log(data);
  console.log(CONSOLE_LOG_SPACER);
});

deleteBlogById(mockBlogData[0]).then((data: BlogType) => {
  console.log(
    "===================================================================================="
  );
  console.log("Blog by Id deleted");
  console.log(
    "===================================================================================="
  );
  console.log(data);
  console.log(CONSOLE_LOG_SPACER);
});

getBlogs().then((data: BlogType) => {
  console.log(
    "===================================================================================="
  );
  console.log("All blogs fetched");
  console.log(
    "===================================================================================="
  );
  console.log(data);
  console.log(CONSOLE_LOG_SPACER);
});
