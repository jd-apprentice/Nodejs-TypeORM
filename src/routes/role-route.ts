import { Router } from "express";
const roleRoute = Router();
import { RoleController } from "../controllers/index";

roleRoute.get("/", RoleController.findAll);
roleRoute.get("/count", RoleController.count);
roleRoute.get("/:id", RoleController.findById);
roleRoute.post("/", RoleController.create);
roleRoute.delete("/:id", RoleController.delete);
roleRoute.put("/:id", RoleController.update);

export default roleRoute;
