import express, { Request, Response } from "express";
import dotenv from "dotenv";
import blogRoutes from "./routes/blog";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(blogRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express app is running");
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});

export default app;
