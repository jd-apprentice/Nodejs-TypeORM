import dotenv from "dotenv";
import { DataSourceOptions } from "typeorm";
import { ConfigType } from "./src/@types/types";
dotenv.config();

const config: ConfigType = {
  postgres: {
    host: process.env.DB_HOST_POSTGRES,
    type: "postgres" as const,
    port: Number(process.env.DB_PORT_POSTGRES),
    username: process.env.DB_USERNAME_POSTGRES,
    password: process.env.DB_PASSWORD_POSTGRES,
    database: process.env.DB_PASSWORD_POSTGRES,
  },
  mysql: {
    host: process.env.DB_HOST_MYSQL,
    type: "mysql" as const,
    port: Number(process.env.DB_PORT_MYSQL),
    username: process.env.DB_USERNAME_MYSQL,
    password: process.env.DB_PASSWORD_MYSQL,
    database: process.env.DB_PASSWORD_MYSQL,
  },
  mongodb: {
    host: process.env.DB_HOST_MONGODB,
    type: "mongodb" as const,
    port: Number(process.env.DB_PORT_MONGODB),
    username: process.env.DB_USERNAME_MONGODB,
    password: process.env.DB_PASSWORD_MONGODB,
    database: process.env.DB_PASSWORD_MONGODB,
  },
};

export const DSConfig: DataSourceOptions = {
  ...(config[process.env.DB_TYPE] ?? "postgres"),
};
