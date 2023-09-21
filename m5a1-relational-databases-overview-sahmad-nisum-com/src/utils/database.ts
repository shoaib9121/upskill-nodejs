import mysql from "mysql2";

const options = {
  host: "localhost",
  user: "root",
  database: "book-store",
  password: "12345678",
};
const pool = mysql.createPool(options);

export default pool.promise();
