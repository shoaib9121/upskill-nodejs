import { ObjectId } from "mongodb";
import { collections } from "../services/database";
import { BLOG_CATEGORY, sampleBlogsData } from "../utils/constants";
import { BlogType } from "../models/Blog";
import { UserType } from "../models/User";

const createBlog = async (data: BlogType, category: BLOG_CATEGORY, user: UserType) => {
  const categoryId = await collections.categories?.findOne({ name: category });
  const userObj = await collections.users?.findOne({ username: user.username });

  if (categoryId && userObj) {
    const createdBlog = await collections.blogs?.insertOne({
      ...data,
      author: userObj._id,
      categoryId: categoryId._id,
    });
    return createdBlog;
  }
};

const updateBlog = async (data: BlogType) => {
  const updatedBlog = await collections.blogs?.updateOne(
    {
      _id: data._id,
    },
    { $set: data }
  );
  return updatedBlog;
};

const deleteBlog = async (data: ObjectId) => {
  const deletedBlog = await collections.blogs?.deleteOne(
    {
      _id: data,
    }
  );
  return deletedBlog;
};

const createSampleBlogs = async () => {
  return await collections.blogs?.insertMany(sampleBlogsData);
};

const getRecentBlogs = async () => {
  return (await collections.blogs
    ?.aggregate([
      {
        $sort: { createDate: -1 }, // descending order
      },
      {
        $limit: 5,
      },
    ])
    .toArray()) as BlogType[];
};

const getMostViewedBlogs = async () => {
  return (await collections.blogs
    ?.aggregate([
      {
        $match: {
          views: {
            $gte: 60,
          },
        },
      },
      {
        $sort: {
          views: 1,
        },
      },
      {
        $limit: 5,
      },
    ])
    .toArray()) as BlogType[];
};

export {
  createBlog,
  updateBlog,
  deleteBlog,
  createSampleBlogs,
  getRecentBlogs,
  getMostViewedBlogs,
};
