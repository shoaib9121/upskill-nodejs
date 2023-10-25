import { ObjectId } from "mongodb";
import { Document } from "mongoose";

export interface UserType extends Document {
  _id?: ObjectId;
  username: string;
  email: string;
  password: string;
}
