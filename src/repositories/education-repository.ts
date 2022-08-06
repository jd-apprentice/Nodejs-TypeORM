import { FindManyOptions } from "typeorm";
import { Source } from "../data-source";
import { Educations } from "../entity/index";
import { CustomRepository } from "./custom-repository";

export class EducationsRepository extends CustomRepository<Educations> {
  constructor() {
    super(Educations, Source.manager);
  }

  async findAll(options?: FindManyOptions<Educations>): Promise<Educations[]> {
    return this.find({
      relations: ["user"],
    });
  }
}
