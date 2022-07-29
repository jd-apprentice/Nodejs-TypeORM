import { Router } from "express";
import experienceRoute from "./experiences-route";
import userRoutes from "./user-route";
const apiRoutes = Router();

apiRoutes.use("/users", userRoutes);
apiRoutes.use("/experiences", experienceRoute);

export default apiRoutes;
