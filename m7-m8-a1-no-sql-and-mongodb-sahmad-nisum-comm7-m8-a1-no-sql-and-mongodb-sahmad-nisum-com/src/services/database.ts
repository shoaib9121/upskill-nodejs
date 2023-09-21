import * as mongoDB from "mongodb";
import dotenv from "dotenv";

export type BlogsCollectionType = {
  blogs?: mongoDB.Collection,
  categories?: mongoDB.Collection,
  users?: mongoDB.Collection
}

export const collections: BlogsCollectionType = {}

export async function connectToDatabase() {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING ? process.env.DB_CONN_STRING : "");

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const blogsCollection: mongoDB.Collection = db.collection(process.env.BLOGS_COLLECTION_NAME ? process.env.BLOGS_COLLECTION_NAME : "");
  const categoriesCollection: mongoDB.Collection = db.collection(process.env.CATEGORIES_COLLECTION_NAME ? process.env.CATEGORIES_COLLECTION_NAME : "");
  const usersCollection: mongoDB.Collection = db.collection(process.env.USERS_COLLECTION_NAME ? process.env.USERS_COLLECTION_NAME : "");

  collections.blogs = blogsCollection;
  collections.categories = categoriesCollection;
  collections.users = usersCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collections: ${collections}`
  );
}
