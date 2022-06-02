import { DataSourceOptions, Repository } from "typeorm";

type DBs = "postgres" | "mysql" | "mongodb";

export type ConfigType = {
  [key in DBs]: DataSourceOptions;
};

export type GenericType = typeof Repository;
