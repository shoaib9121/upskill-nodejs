import { ObjectId } from "mongodb";
import { UserType } from "./type";

export default class User {
  email: string;
  username: string;
  password: string;
  id?: ObjectId;

  constructor(props: UserType) {
    const { email, username, password } = props;
    this.email = email;
    this.username = username;
    this.password = password;
  }
}
