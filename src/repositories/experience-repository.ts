import { FindManyOptions } from "typeorm";
import { FindWhere } from "../@types/types";
import { Source } from "../data-source";
import { Experiences } from "../entity/index";
import { CustomRepository } from "./custom-repository";

export class ExperienceRepository extends CustomRepository<Experiences> {
  constructor() {
    super(Experiences, Source.manager);
  }

  async findAll(): Promise<Experiences[]> {
    return this.find({
      relations: ["user"],
    });
  }

  async findExperience(id: FindWhere<Experiences>): Promise<Experiences> {
    return this.findById({
      where: { id } as FindWhere<Experiences>,
      relations: ["user"],
    });
  }
}
