"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(props) {
        const { name, email, address, password, username, isLoggedIn } = props;
        this._name = name;
        this._email = email;
        this._address = address;
        this._password = password;
        this.username = username;
        this.isLoggedIn = isLoggedIn;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set email(email) {
        this._email = email;
    }
    get email() {
        return this._email;
    }
    set address(address) {
        this._address = address;
    }
    set password(password) {
        this._password = password;
    }
    get address() {
        return this._address;
    }
    setIsLoggedIn(isLoggedIn) {
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
exports.default = User;
