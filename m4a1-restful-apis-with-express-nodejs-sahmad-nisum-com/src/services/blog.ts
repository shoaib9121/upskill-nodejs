import axios from "axios";
import { BlogType } from "../Blog/types";
import { API_URI } from "../routes/blog";
import { handleAxiosError } from "../utils";

const BASE_URL = "http://localhost:8000";

const headers = {
  "Content-Type": "application/json",
};

const getBlogs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}${API_URI}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

const postBlog = async (data: BlogType) => {
  try {
    const response = await axios.post(
      `${BASE_URL}${API_URI}`,
      {
        ...data,
      },
      { headers: { ...headers, user_id: 1 } }
    );

    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

const putBlog = async (data: BlogType) => {
  try {
    const { id } = data;
    const response = await axios.put(`${BASE_URL}${API_URI}/${id}`, { ...data }, { headers: { ...headers, user_id: 1 } });
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

const getBlogById = async (data: BlogType) => {
  try {
    const { id } = data;
    const response = await axios.get(`${BASE_URL}${API_URI}/${id}`, { headers });
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

const deleteBlogById = async (data: BlogType) => {
  try {
    const { id } = data;
    const response = await axios.delete(`${BASE_URL}${API_URI}/${id}`, { headers });
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export { getBlogs, postBlog, putBlog, getBlogById, deleteBlogById };
