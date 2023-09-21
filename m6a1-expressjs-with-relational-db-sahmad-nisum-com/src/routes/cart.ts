import express, { Request, Response } from "express";
import { CART_URI, executeQuery, executeQueryFromPath } from "../utils";

const router = express.Router();

// Get user cart
router.get(`${CART_URI}/:id`, async (req: Request, res: Response) => {
  const id = req.params.id;
  const [data]: any = await executeQueryFromPath("../queries/getUserCart.sql", [id]);
  if (data) {
    const cartItems = await executeQueryFromPath("../queries/getCartItems.sql", [data.id]);
    res.json(cartItems);
  } else {
    return res.status(404).json({ message: "User cart not found" });
  }
});

// Add book to user cart
router.post(`${CART_URI}`, async (req: Request, res: Response) => {
  const { price, quantity, user_id, book_id } = req.body;
  const values = [price, quantity, user_id, book_id];
  const data: any = await executeQueryFromPath("../queries/addBookToUserCart.sql", values);
  if (data) {
    res.json(data);
  } else {
    return res.status(404).json({ message: "Book could not be added in user's cart" });
  }
});

// Remove book from user cart
router.delete(`${CART_URI}`, async (req: Request, res: Response) => {
  const { cart_id, book_id } = req.body;
  const values = [book_id, cart_id]
  const data: any = await executeQueryFromPath("../queries/removeBookFromUserCart.sql", values);
  if (data) {
    return res.json(data);
  } else {
    return res.status(404).json({ message: "Book not found in user's cart" });
  }
});

export default router;
