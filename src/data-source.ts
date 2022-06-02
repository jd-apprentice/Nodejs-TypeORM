import "reflect-metadata";
import { DataSource } from "typeorm";
import { UserEntity } from "./entity/User";
import { DSConfig } from "../ormconfig";

export const Source = new DataSource({
  ...DSConfig,
  entities: [UserEntity],
  synchronize: true,
  migrations: [__dirname + "/dist/migrations/*.js"],
  subscribers: [__dirname + "/dist/subscribers/*.js}"],
});
