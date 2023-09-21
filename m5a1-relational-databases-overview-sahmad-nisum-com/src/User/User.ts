import { IUser } from "./types";

class User implements IUser {
  private _name;
  private _email;
  private _address;
  private _password;
  username;
  isLoggedIn;


  constructor(props: IUser) {
    const { name, email, address, password, username, isLoggedIn } = props;
    this._name = name;
    this._email = email;
    this._address = address;
    this._password = password;
    this.username = username;
    this.isLoggedIn = isLoggedIn;
  }

  set name(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set email(email: string) {
    this._email = email;
  }

  get email() {
    return this._email;
  }

  set address(address: string) {
    this._address = address;
  }

  set password(password: string) {
    this._password = password;
  }

  get address() {
    return this._address;
  }

  setIsLoggedIn(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }

  getPassword() {
    return this._password;
  }

  getUsername() {
    return this.username;
  }

  handleLogin() {
    this.isLoggedIn = true;
  }

  handleLogout() {
    this.isLoggedIn = false;
  }

}

export default User;
