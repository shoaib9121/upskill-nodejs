import axios from "axios";
import { BASE_URL } from "../utils/server";
import { headers } from ".";
import { CART_URI, handleAxiosError } from "../utils";

const getUserCart = async (id: number) => {
  try {
    const response = await axios.get(`${BASE_URL}${CART_URI}/${id}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

const postBookToCart = async (data: any) => {
  try {
    const response = await axios.post(
      `${BASE_URL}${CART_URI}`,
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

const removeBookFromUserCart = async (data: any) => {
  try {
    const response = await axios.delete(`${BASE_URL}${CART_URI}`, { headers, data });
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export { getUserCart, postBookToCart, removeBookFromUserCart };
