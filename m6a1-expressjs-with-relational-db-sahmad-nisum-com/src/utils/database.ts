import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

// Mysql connection
const options = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
};
const pool = mysql.createPool(options);

export default pool.promise();
