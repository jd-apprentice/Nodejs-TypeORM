import { Router } from "express";
import educationRoute from "./education-route";
import experienceRoute from "./experiences-route";
import roleRoute from "./role-route";
import userRoutes from "./user-route";
const apiRoutes = Router();

apiRoutes.use("/users", userRoutes);
apiRoutes.use("/experiences", experienceRoute);
apiRoutes.use("/educations", educationRoute);
apiRoutes.use("/roles", roleRoute);

export default apiRoutes;
