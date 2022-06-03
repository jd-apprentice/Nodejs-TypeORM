import { DatabaseType, Repository } from "typeorm";
export interface IConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  type: DatabaseType;
}

export interface AnyObject {
  [property: string]: any;
}

export type GenericType = typeof Repository;
