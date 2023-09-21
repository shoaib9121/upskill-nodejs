import express, { Request, Response } from "express";
import { mockNewBook } from "../utils/constants";
import PermissionMiddleware from "../middlewares/permission";
import { BookType } from "../Book";
import { Book } from "../entities";
import ormDataSource from "../utils/ormDataSource";
export const BOOK_URI = "/books";

const router = express.Router();

// Add a new book
router.post(BOOK_URI, PermissionMiddleware, async (req: Request, res: Response) => {
  const data = req.body;

  ormDataSource.initialize().then(async () => {
    const existingBooks: any = await Book.find().catch((err) => console.log("err", err));
    if (!existingBooks.find((item: BookType) => item.title === data.title)) {
      const book = new Book();
      book.title = mockNewBook.title;
      book.author = mockNewBook.author;
      book.price = mockNewBook.price;
      book.quantity = mockNewBook.quantity;

      await ormDataSource.manager.save(book);
      return res.json(book);
    }
  });
});

// Update a book by ID
router.put(`${BOOK_URI}/:id`, PermissionMiddleware, async (req: Request, res: Response) => {
  const id = +req.params.id;
  const data = req.body;
  ormDataSource.initialize().then(async () => {
    await ormDataSource.manager.update(Book, id, data);
    return res.json(data);
  });
});

// Get book by ID
router.get(`${BOOK_URI}/:id`, async (req: Request, res: Response) => {
  const id = +req.params.id;
  ormDataSource.initialize().then(async () => {
    const result = await ormDataSource.manager.findBy(Book, { id });
    if(result){
      return res.json(result);
    }
    res.status(404).json({ error: "Book not found" });
  });

});

// Delete a book by ID
router.delete(`${BOOK_URI}/:id`, async (req: Request, res: Response) => {
  const id = +req.params.id;

  ormDataSource.initialize().then(async () => {
    const result = await ormDataSource.manager.delete(Book, id);
    if(result){
      return res.json({message: "Book deleted successfully"});
    }
    res.status(404).json({ error: "Book not found" });
  });

});

// Get all books
router.get(BOOK_URI, async (_req: Request, res: Response) => {
  ormDataSource.initialize().then(async () => {
    const data = await Book.find().catch((err) => console.log("err", err));
    return res.json(data);
  });
});

export default router;
