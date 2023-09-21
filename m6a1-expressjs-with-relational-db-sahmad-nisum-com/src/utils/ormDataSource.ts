import { DataSource } from "typeorm";
import { Book, Cart, Order, OrderItems, User, CartItems } from "../entities";

const ormDataSource = new DataSource({
  type: "mysql",
  host: process.env.DATABASE_HOST,
  port: 3306, // check if this needed?
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.TYPEORM_DATABASE_NAME,
  entities: [Book, User, Cart, Order, OrderItems, CartItems],
  // entities: [__dirname + "/entities/*{.ts}"],
  synchronize: true,
  // logging: true,
});

export default ormDataSource;
