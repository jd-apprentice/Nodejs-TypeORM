import { Router } from "express";
const experienceRoute = Router();
import { ExperienceController } from "../controllers/index";

experienceRoute.get("/", ExperienceController.findAll);
experienceRoute.get("/count", ExperienceController.count);
experienceRoute.get("/:id", ExperienceController.findById);
experienceRoute.post("/", ExperienceController.create);
experienceRoute.delete("/:id", ExperienceController.delete);
experienceRoute.put("/:id", ExperienceController.update);

export default experienceRoute;
