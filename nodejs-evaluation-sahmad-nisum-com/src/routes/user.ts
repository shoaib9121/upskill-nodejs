import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY, USER_URI } from "../utils/index";
import { UserType } from "../models/User/type";
import { collections } from "../database";
import { jwtMiddleware } from "../middlewares";

const router = express.Router();

// Login user
router.post(`${USER_URI}/login`, async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = (await collections.users?.findOne({ username })) as UserType;

    if (!user) {
      return res.status(401).json({ message: "Invalid username" });
    }

    const isValidPass = await bcrypt.compare(password, user.password);

    if (!isValidPass) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const accessToken = await jwt.sign(
      { user: { id: user._id, email: user.email, username: user.username } },
      JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      },
      (err, token) => {
        console.log({ err, token });
      }
    );

    res.status(200).send({ accessToken });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Register new user
router.post(`${USER_URI}/register`, async (req: Request, res: Response) => {
  try {
    const newUser = req.body as UserType;
    const existingUser = await collections.users?.findOne({ username: newUser.username });

    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }
    const hashPassword = await bcrypt.hash(newUser.password, 10);
    const result = await collections.users?.insertOne({ ...newUser, password: hashPassword });

    result
      ? res.status(201).send(`Successfully created a new user with id ${result.insertedId}`)
      : res.status(500).send("Failed to create a new user.");
  } catch (error) {
    res.status(400).send(error);
  }
});

// Protected route
router.get(`/protected-route`, jwtMiddleware, async (req: Request, res: Response) => {
  res.status(200).json({ message: "User is authorized to view this route" });
});

export default router;
