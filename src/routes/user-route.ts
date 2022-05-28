import { Router } from "express";
const userRoutes = Router();
import UserController from "../controllers/user-controller";

userRoutes.get("/", UserController.findAll);
userRoutes.get("/:id", UserController.findById);
userRoutes.post("/", UserController.create);
userRoutes.delete("/:id", UserController.deleteUser);
userRoutes.put("/:id", UserController.updateUser);

export default userRoutes;
