export * from "./constants";

import db from "./database";
import fs from "fs";
import * as path from "path";

export const CREATE_QUERY = {
  BOOK: `
    CREATE TABLE books (
    id INT,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (id)
  );`,
};

export const executeQuery = async (query: string) => {
  try {
    const result = await db.query(query);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const executeQueryFromPath = async (filePath: string) => {
  try {
    const fullPath = path.resolve(__dirname, filePath);
    const query = fs.readFileSync(fullPath, "utf-8");
    const result = await db.query(query);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
