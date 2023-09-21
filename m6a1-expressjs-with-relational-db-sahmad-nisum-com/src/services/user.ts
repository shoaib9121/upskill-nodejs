import axios from "axios";
import { BASE_URL } from "../utils/server";
import { USER_URI, handleAxiosError } from "../utils";
import { IUser } from "User";
import { headers } from "../services";

const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}${USER_URI}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

const postNewUser = async (data: IUser) => {
  try {
    const response = await axios.post(
      `${BASE_URL}${USER_URI}`,
      { ...data },
      { headers: { ...headers, user_id: 1 } }
    );
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export { getUsers, postNewUser };
