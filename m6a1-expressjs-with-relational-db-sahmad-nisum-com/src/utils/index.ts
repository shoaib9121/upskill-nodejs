export * from "./constants";

import db from "./database";
import fs from "fs";
import * as path from "path";
import { AxiosError } from "axios";
import { CONSOLE_LOG_SPACER } from "./constants";

export const handleAxiosError = (error: any) => {
  const axiosError = error as AxiosError;
  if (axiosError.response) {
    // The request was made, but the server responded with an error status code (e.g., 4xx, 5xx)
    console.error("Server responded with an error:", axiosError.response.data);
  } else if (axiosError.request) {
    // The request was made, but no response was received (e.g., network error)
    console.error("No response received:", axiosError.request);
  } else {
    console.error("Error during request setup:", axiosError.message);
  }
};

export const executeQuery = async (query: string) => {
  try {
    const result = await db.query(query);
    return result[0];
  } catch (error) {
    console.log(error);
  }
};

/**
 * 
 * @param filePath 
 * @param data data to be updated in the table
 * @returns 
 */
export const executeQueryFromPath = async (filePath: string, data: any = []) => {
  try {
    const fullPath = path.resolve(__dirname, filePath);
    const query = fs.readFileSync(fullPath, "utf-8");
    const result = await db.query(query, [...data]);
    return result[0];
  } catch (error) {
    console.log(error);
  }
};

export const logResults = (message: unknown, data:unknown) => {
  console.log(
    "===================================================================================="
  );
  console.log(message);
  console.log(
    "===================================================================================="
  );
  console.log(data);
  console.log(CONSOLE_LOG_SPACER);
}