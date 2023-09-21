"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShoppingCart {
    constructor() {
        this.cartItems = [];
        this.totalPrice = 0;
    }
    getCartItem(book, quantity) {
        const cartItem = {};
        cartItem.book = book;
        cartItem.quantity = quantity;
        cartItem.subtotal = book.getPrice() * quantity;
        return cartItem;
    }
    getCartTotal() {
        return this.cartItems.reduce((sum, cartItem) => {
            return cartItem.subtotal + sum;
        }, 0);
    }
}
exports.default = ShoppingCart;
