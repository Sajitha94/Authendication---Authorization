import { Router } from "express";
import { UserController } from "../controllers/userController.js";
import { authUser } from "../middleware/authMiddleware.js";

const userRouter = Router();

userRouter.get("/", authUser, UserController);

export default userRouter;
