import { Request, Response, NextFunction } from "express";
import { JWT_SECRET_KEY } from "../utils/constants";
import jwt, { JwtPayload } from "jsonwebtoken";

export const jwtMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    const decodedPayload = decoded as JwtPayload;

    // @ts-ignore
    req.userId = decodedPayload.user.id;
    next();
  });
};
