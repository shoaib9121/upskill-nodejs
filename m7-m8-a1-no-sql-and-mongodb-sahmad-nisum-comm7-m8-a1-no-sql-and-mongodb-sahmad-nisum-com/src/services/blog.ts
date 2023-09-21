import axios from "axios";
import { BlogType } from "../models/Blog";
import { BASE_URL } from "../server";
import { BLOG_URI, CHILD_URI, handleAxiosError } from "../utils/index";

const getBlogs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}${BLOG_URI}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

const getAggregatedData = async (type: string) => {
  try {
    const response = await axios.get(`${BASE_URL}${CHILD_URI.AGGREGATED_DATA}/?type=${type}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

const postBlog = async (data: BlogType) => {
  try {
    const response = await axios.post(
      `${BASE_URL}${BLOG_URI}`,
      {
        ...data,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export { getBlogs, getAggregatedData, postBlog };
