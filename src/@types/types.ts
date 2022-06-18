import { DatabaseType, FindOptionsWhere } from "typeorm";
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

export type OptionsFind = { relations?: any[] };
export type RelationType<T> = T;

export type FindWhere<T> = FindOptionsWhere<T>;
export type ID = string | number | any;
