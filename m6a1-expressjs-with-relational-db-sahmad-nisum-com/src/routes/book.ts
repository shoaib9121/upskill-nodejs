import express, { Request, Response } from "express";
import PermissionMiddleware from "../middlewares/permission";
import { BOOK_URI, executeQuery, executeQueryFromPath } from "../utils";
import { BookType } from "../Book";

const router = express.Router();

// Add a new book
router.post(BOOK_URI, PermissionMiddleware, async (req: Request, res: Response) => {
  const data = req.body;
  const existingBooks: any = (await executeQueryFromPath("../queries/getAllBooks.sql")) || [];
  if (!existingBooks.find((item: BookType) => item.title === data.title)) {
    const [title, author, price, quantity] = [data.title, data.author, data.price, data.quantity];
    const results: any = await executeQueryFromPath("../queries/addBookTo.sql", [
      title,
      author,
      price,
      quantity,
    ]);
    if (results) {
      return res.json(results);
    }
  }
});

// Update a book by ID
router.put(`${BOOK_URI}/:id`, PermissionMiddleware, async (req: Request, res: Response) => {
  const id = +req.params.id
  const data = req.body;

  const existingBook: any = (await executeQuery(`SELECT * FROM books WHERE id = ${id}`)) || [];

  if (existingBook.length) {
    const values = [data.title, data.author, data.price, data.quantity, id];
    const results: any = await executeQueryFromPath("../queries/updateBookById.sql", values);
    if (results) {
      return res.json(results);
    }
  }
});

// Get book by ID
router.get(`${BOOK_URI}/:id`, async (req: Request, res: Response) => {
  const id = +req.params.id;
  const result: any = await executeQueryFromPath("../queries/getBookById.sql", [id]);
  if (result) {
    return res.json(result);
  }

  res.status(404).json({ error: "Book not found" });
});

// Delete a book by ID
router.delete(`${BOOK_URI}/:id`, async (req: Request, res: Response) => {
  const id = +req.params.id;

  const results: any = await executeQueryFromPath("../queries/removeBookById.sql", [id]);
  if (results) {
    return res.json(results);
  }
  res.status(404).json({ error: "Book not found" });
});

// Get all books
router.get(BOOK_URI, async (_req: Request, res: Response) => {
  const data = await executeQueryFromPath("../queries/getAllBooks.sql");
  res.json(data);
});

export default router;
