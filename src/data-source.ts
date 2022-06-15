import "reflect-metadata";
import { DataSource } from "typeorm";
import { DSConfig } from "../ormconfig";

export const Source = new DataSource({
  ...DSConfig,
  synchronize: true,
  migrations: [__dirname + "/dist/migrations/*.ts"],
  subscribers: [__dirname + "/dist/subscribers/*.ts}"],
  entities: [__dirname + "/entity/*.js", __dirname + "/entity/*.ts"],
});
