import { Repository } from "typeorm";
import { GenericType } from "../@types/types";

export class GenericRepository extends Repository<GenericType> {
  static getRepository(datasource: any, entity: any) {
    return datasource.getRepository(entity);
  }
}
