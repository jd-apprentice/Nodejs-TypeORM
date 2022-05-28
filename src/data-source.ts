import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { UserEntity } from "./entity/User";
dotenv.config();

export const postgressDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [UserEntity],
  synchronize: true,
  migrations: [__dirname + "/dist/migrations/*.js"],
  subscribers: [__dirname + "/dist/subscribers/*.js}"],
});
