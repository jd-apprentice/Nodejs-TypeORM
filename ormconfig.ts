import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import { DatabaseType, DataSourceOptions } from "typeorm";
const env = dotenv.config();
dotenvExpand.expand(env);

const config = {
  host: process.env[`${process.env.DB_TYPE}_HOST`],
  type: process.env.DB_TYPE as DatabaseType,
  port: +process.env[`${process.env.DB_TYPE}_PORT`],
  username: process.env[`${process.env.DB_TYPE}_USER`],
  password: process.env[`${process.env.DB_TYPE}_PASS`],
  database: process.env[`${process.env.DB_TYPE}_DB`],
};

export const DSConfig: DataSourceOptions | any = {
  type: config.type,
  host: config.host,
  port: config.port,
  username: config.username,
  password: config.password,
  database: config.database,
};
