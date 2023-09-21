import {
  createSampleBlogs,
  createBlog,
  logResults,
  createUser,
  updateBlog,
  deleteBlog,
} from "./utils/index";
import { getBlogs, getAggregatedData, postBlog } from "./services/blog";
import {
  AGGREGATION_TYPE,
  BLOG_CATEGORY,
  CONSOLE_LOG_SPACER,
  mockNewBlog,
  sampleBlogsData,
  sampleUserData,
} from "./utils/constants";
import Blog, { BlogType } from "./models/Blog";
import { collections, connectToDatabase } from "./services/database";
import app, { BASE_URL, PORT } from "./server";
import { blogRoutes } from "./routes";
export { default } from "./server";

connectToDatabase()
  .then(async () => {
    app.use(blogRoutes);

    app.listen(PORT, async () => {
      console.log(`server running on ${BASE_URL}`);
    });

    console.log(
      "===================================================================================="
    );
    console.log("DISPLAY RESULTS");
    console.log(
      "===================================================================================="
    );
    console.log(CONSOLE_LOG_SPACER);

    /**
     *
     * **************************************************
     * CREATE NEW USER
     * **************************************************
     */
    // createUser(sampleUserData).then((data) => {
    //   logResults("New user created", data);
    // });

    /**
     *
     * **************************************************
     * CREATE NEW BLOG
     * **************************************************
     */
    // const blog = new Blog({...mockNewBlog, content: "This is the 3rd content", })
    // postBlog(blog).then((data) => {
    //   logResults("Successfully posted a new blog", data);
    // });
    // createBlog(sampleBlogsData[0], BLOG_CATEGORY.TRAVEL, sampleUserData).then((data) => {
    //   logResults("New blog created", data);
    // });

    /**
     *
     * **************************************************
     * BULK CREATE BLOGS
     * **************************************************
     */
    // createSampleBlogs();

    /**
     *
     * **************************************************
     * UPDATE EXISTING BLOG
     * **************************************************
     */
    // const existingBlog = await collections.blogs?.findOne({ title: sampleBlogsData[0].title });
    // const updatedBlog: BlogType = {
    //   ...sampleBlogsData[0], title: 'Journal Updated', _id: existingBlog?._id
    // }
    // updateBlog(updatedBlog).then((data) => {
    //   logResults("Blog updated", data);
    // });

    /**
     *
     * **************************************************
     * DELETE EXISTING BLOG
     * **************************************************
     */
    // const existingBlog = await collections.blogs?.findOne({ title: sampleBlogsData[0].title });
    // if (existingBlog) {
    //   deleteBlog(existingBlog?._id).then((data) => {
    //     logResults("Blog deleted", data);
    //   });
    // }

    /**
     *
     * **************************************************
     * GET ALL BLOGS
     * **************************************************
     */
    // getBlogs().then((data: any) => {
    //   logResults("All blogs fetched", data);
    // });

    /**
     *
     * **************************************************
     * GET RECENT BLOGS
     * **************************************************
     */
    // getAggregatedData(AGGREGATION_TYPE.RECENT_BLOGS).then((data: any) => {
    //   logResults("Recent blogs fetched", data);
    // });

    /**
     *
     * **************************************************
     * GET MOST VIEWED BLOGS
     * **************************************************
     */
    // getAggregatedData(AGGREGATION_TYPE.MOST_VIEWED_BLOGS).then((data: any) => {
    //   logResults("Most viewed blogs fetched", data);
    // });

  })
  .catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });
