import axios from "axios";
import { BASE_URL } from "../utils/server";
import { headers } from ".";
import { BookType } from "../Book/types";
import { BOOK_URI, handleAxiosError } from "../utils";

const getBooks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}${BOOK_URI}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

const postBook = async (data: BookType) => {
  try {
    const response = await axios.post(
      `${BASE_URL}${BOOK_URI}`,
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

const putBook = async (data: BookType) => {
  try {
    const { id } = data;
    const response = await axios.put(`${BASE_URL}${BOOK_URI}/${id}`, { ...data }, { headers: { ...headers, user_id: 1 } });
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

const getBookById = async (data: BookType) => {
  try {
    const { id } = data;
    const response = await axios.get(`${BASE_URL}${BOOK_URI}/${id}`, { headers });
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

const deleteBookById = async (data: BookType) => {
  try {
    const { id } = data;
    const response = await axios.delete(`${BASE_URL}${BOOK_URI}/${id}`, { headers });
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export { getBooks, postBook, putBook, getBookById, deleteBookById };
