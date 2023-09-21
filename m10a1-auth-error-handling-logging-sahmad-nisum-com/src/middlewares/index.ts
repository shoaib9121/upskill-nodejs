import { Request, Response, NextFunction } from "express";
import { ValidationError } from "express-validator";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../utils/constants";

class AuthenticationError extends Error {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.name = 'AuthenticationError';
    this.statusCode = 401;
  }
}

/**
 * Global error handler
 */
const errorHandler = async (err: any, req: Request, res: Response, next: NextFunction) => {
  // @ts-ignore
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json({ message: 'Validation Error', details: err.details });
  }

  if (err instanceof AuthenticationError) {
    return res.status(err.statusCode).json({ message: 'Authentication Error', details: err.message });
  }

  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ message: 'Invalid Token' });
  }

  console.error(err);
  return res.status(500).json({ message: 'Internal Server Error' });
}

/**
 * JWT middleware
 */
const jwtMiddleware = (req: Request, res: Response, next: NextFunction) => {
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
    req.userId = decodedPayload.userId;
    next();
  });
};

export { jwtMiddleware, errorHandler };
