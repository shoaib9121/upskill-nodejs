import express from "express";
import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT;
export const BASE_URL = `http://${process.env.DB_HOST}:${PORT}`;

const app = express();

app.use(express.json());

export default app;
