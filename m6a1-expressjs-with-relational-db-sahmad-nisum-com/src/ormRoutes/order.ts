import express, { Request, Response } from "express";
import ormDataSource from "../utils/ormDataSource";
import { executeQuery, executeQueryFromPath, mockUser } from "../utils";
import { Book, CartItems, Order, User } from "../entities";

export const ORDER_URI = "/order";

const router = express.Router();

// Place order
router.post(`${ORDER_URI}`, async (req: Request, res: Response) => {
  const { user_id } = req.body;
  let total_amount = 0;

  ormDataSource.initialize().then(async () => {
    // Calculate cart sum
    const cartItems = await CartItems.find({ where: { id: 1 } });
    if (cartItems) {
      total_amount = cartItems.reduce((sum: number, currObj: any) => {
        return (sum += currObj.price);
      }, 0);
    }
    // Insert entry into orders table
    const date = new Date();
    const user = await User.findOne({where: {id:user_id}});
    const order = new Order();
    order.total_amount = total_amount;
    order.date = date.toISOString();
    console.log({cartItems, user, order});
    order.user = user || mockUser as any;
    order.save();

    // Update book quantity in inventory
    for (const cI of cartItems) {
      const book = await Book.findOne({where: {id: 1}}); // currently hard coded book id for testing purpose
      if (book) {
        const {quantity} = book;
        const updatedQty = +quantity - +cI.quantity;
        await Book.update(book.id, {...book, quantity: updatedQty});
      }
    }
  });
});

export default router;
