import express, { Request, Response } from "express";
import { USER_URI } from "../utils/constants";
import { User } from "../entities";
import ormDataSource from "../utils/ormDataSource";
import PermissionMiddleware from "../middlewares/permission";
import { IUser } from "User";

const router = express.Router();

// Get users
router.get(USER_URI, async (_req: Request, res: Response) => {
  ormDataSource.initialize().then(async () => {
    const data = await User.find().catch((err) => console.log("err", err));
    return res.json(data);
  });
});

// Add a new user
router.post(USER_URI, PermissionMiddleware, async (req: Request, res: Response) => {
  const data = req.body;

  ormDataSource.initialize().then(async () => {
    const existingBooks: any = await User.find().catch((err) => console.log("err", err));
    if (!existingBooks.find((item: IUser) => item.name === data.name)) {
      const user = new User();
      user.name = data.name;
      user.email = data.email;
      user.address = data.address;

      await ormDataSource.manager.save(user);
      return res.json(user);
    }
  });
});

export default router;
