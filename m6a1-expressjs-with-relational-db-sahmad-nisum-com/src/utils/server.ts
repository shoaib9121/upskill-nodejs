import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { bookRoutes, cartRoutes, orderRoutes } from "../routes";
import { ormBookRoute, ormCartRoute, ormUserRoute, ormOrderRoute } from "../ormRoutes";

dotenv.config();

export const BASE_URL = `http://${process.env.DATABASE_HOST}:${process.env.PORT}`;


const app = express();
const PORT = process.env.PORT;

app.use(express.json());

// MySql routes
app.use(bookRoutes);
app.use(cartRoutes);
app.use(orderRoutes);

// TypeORM routes
app.use(ormBookRoute);
app.use(ormCartRoute);
app.use(ormUserRoute);
app.use(ormOrderRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Book store app is running");
});

app.listen(PORT, async () => {
  console.log(`server running on ${BASE_URL}`);
});

export default app;
