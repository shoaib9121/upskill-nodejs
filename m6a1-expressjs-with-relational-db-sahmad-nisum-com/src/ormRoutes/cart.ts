import express, { Request, Response } from "express";
import { CART_URI } from "../utils/constants";
import { Cart, CartItems, Book } from "../entities";
import ormDataSource from "../utils/ormDataSource";

const router = express.Router();

// Get user cart
router.get(`${CART_URI}/:id`, async (req: Request, res: Response) => {
  const id = +req.params.id;
  ormDataSource.initialize().then(async () => {
    const data = await ormDataSource.manager.findBy(Cart, { id });
    if (data) {
      return res.json(data);
    }
    return res.status(404).json({ error: "Cart not found" });
  });
});

// Add book to cart items
router.post(`${CART_URI}`, async (req: Request, res: Response) => {
  const data = req.body;
  ormDataSource.initialize().then(async () => {
    const user = data;
    const cart = await Cart.findOne({ where: { id: 1 } });

    if (!cart) {
      const cart = new Cart();
      cart.user = user;
      cart.save();
    }

    const book1 = await Book.findOne({ where: { id: 1 } });
    const cartItems = new CartItems();
    if (cart && book1) {
      cartItems.cart = cart;
      cartItems.book = book1;
      cartItems.price = book1.price;
      cartItems.quantity = book1.quantity;
      cartItems.save();
      return res.json(cartItems);
    }
  });
});

export default router;
