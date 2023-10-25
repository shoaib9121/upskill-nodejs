import { UserType } from "./type";
import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema<UserType>({
  username: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model<UserType>('User', userSchema);

export default UserModel;