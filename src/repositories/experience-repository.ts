import { Source } from "../data-source";
import { Experiences } from "../entity/index";
import { CustomRepository } from "./custom-repository";

export class ExperienceRepository extends CustomRepository<Experiences> {
  constructor() {
    super(Experiences, Source.manager);
  }
}
