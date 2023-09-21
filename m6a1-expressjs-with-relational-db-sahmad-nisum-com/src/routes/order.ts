import express, { Request, Response } from "express";
import { executeQuery, executeQueryFromPath } from "../utils";

export const ORDER_URI = "/order";

const router = express.Router();

// Get order history
// router.get(`${ORDER_URI}/:id`, async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const [data]: any = await executeQueryFromPath("../queries/getUserCart.sql", [id]);
//   if (data) {
//     const cartItems = await executeQueryFromPath("../queries/getCartItems.sql", [data.id]);
//     res.json(cartItems);
//   } else {
//     return res.status(404).json({ message: "User cart not found" });
//   }
// });

// Place order
router.post(`${ORDER_URI}`, async (req: Request, res: Response) => {
  const { user_id } = req.body;
  let total_amount = 0;

  // Calculate cart sum
  const cartItems: any = await executeQueryFromPath("../queries/getCartItems.sql", [user_id]);
  if (cartItems) {
    total_amount = cartItems.reduce((sum: number, currObj: any) => {
      return (sum += currObj.price);
    }, 0);
  }

  // Insert entry into orders table
  const date = new Date();
  const values = [user_id, date, total_amount];
  const orderInserted: any = await executeQueryFromPath("../queries/placeOrder.sql", values);

  // Update book quantity in inventory
  for (const cI of cartItems) {
    const book: any = await executeQueryFromPath("../queries/getBookById.sql", [cI.book_id]);
    if (book) {
      const { title, author, quantity, price } = book[0];
      const updatedQty = +quantity - +cI.quantity;
      const values = [title, author, price, updatedQty, cI.book_id];
      await executeQueryFromPath("../queries/updateBookById.sql", values);
    }
  }
  
  // Delete cart items
  for (const cI of cartItems) {
    await executeQueryFromPath("../queries/removeCartItems.sql", [cI.cart_id]);
  }

  // Delete user cart
  if (orderInserted) {
    await executeQueryFromPath("../queries/removeUserCart.sql", [user_id]);
  }
  if (orderInserted) {
    return res.json(orderInserted);
  }
  return res.json({ message: "something went wrong" });
});

export default router;
