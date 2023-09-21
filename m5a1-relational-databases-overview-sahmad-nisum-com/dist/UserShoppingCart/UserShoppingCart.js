"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ShoppingCart_1 = __importDefault(require("../ShoppingCart"));
class UserShoppingCart extends ShoppingCart_1.default {
    constructor() {
        super();
    }
    addBook(cartItem) {
        this.cartItems.push(cartItem);
    }
    removeBook(cartItem) {
        const index = this.cartItems.findIndex((item) => item.book.getTitle().toLowerCase() === cartItem.book.getTitle().toLowerCase());
        if (index !== -1) {
            this.cartItems.splice(index, 1);
        }
        else {
            console.log("Cart item not found");
        }
    }
    viewCart() {
        return this.cartItems;
    }
}
exports.default = UserShoppingCart;
