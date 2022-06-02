import cors from "cors";
import express from "express";
import apiRoutes from "./routes";
import { Source } from "./data-source";

Source.initialize()
  .then(() => {
    // Init express app
    const app = express();
    app.use(
      express.urlencoded({
        extended: true,
      })
    );
    app.use(express.json());
    app.use(cors());
    // Register all application routes
    app.use("/api/", apiRoutes);

    app.listen(process.env.APP_PORT, () => {
      console.log(`⚡️[server]: Server is running at ${process.env.APP_PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
