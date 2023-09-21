import { ObjectId } from "mongodb";

export interface UserType {
  _id?: ObjectId;
  username: string;
  email: string;
  password: string;
}