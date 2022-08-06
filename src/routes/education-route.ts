import { Router } from "express";
const educationRoute = Router();
import { EducationController } from "../controllers/index";

educationRoute.get("/", EducationController.findAll);
educationRoute.get("/count", EducationController.count);
educationRoute.get("/:id", EducationController.findById);
educationRoute.post("/", EducationController.create);
educationRoute.delete("/:id", EducationController.delete);
educationRoute.put("/:id", EducationController.update);

export default educationRoute;
