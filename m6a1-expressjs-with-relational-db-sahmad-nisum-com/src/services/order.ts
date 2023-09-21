import axios from "axios";
import { BASE_URL } from "../utils/server";
import { headers } from ".";
import { ORDER_URI } from "../routes/order";
import { handleAxiosError } from "../utils";

const placeOrder = async (data: any) => {
  try {
    const response = await axios.post(
      `${BASE_URL}${ORDER_URI}`,
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

export {  placeOrder };
