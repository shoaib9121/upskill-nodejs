import { collections } from "../services/database";
import { UserType } from "../models/User";

const createUser = async (user: UserType) => {
  const createdUser = await collections.users?.insertOne(user);
  return createdUser;
}

export { createUser };
