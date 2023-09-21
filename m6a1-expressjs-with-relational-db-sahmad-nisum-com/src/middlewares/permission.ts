import { Request, Response, NextFunction } from "express";

const PermissionMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.hasOwnProperty("user_id")) {
    return next();
  }

  return res.status(403).json({
    error: "Access Denied: user_id is missing in headers",
  });
};

export default PermissionMiddleware;
