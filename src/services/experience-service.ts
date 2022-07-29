import { DeleteResult, FindOneOptions, UpdateResult } from "typeorm";
import { FindWhere } from "../@types/types";
import { Experiences } from "../entity";
import { ExperienceRepository } from "../repositories";

class ExperienceService {
  private readonly repository: ExperienceRepository;
  constructor() {
    this.repository = new ExperienceRepository();
  }
  async findExperiences(): Promise<Experiences[]> {
    return this.repository.findAll();
  }
  async createExperience(
    experience: Partial<Experiences>
  ): Promise<Experiences> {
    return this.repository.createEntity(experience as Experiences);
  }
  async findExperienceById(
    id: FindOneOptions<Experiences>
  ): Promise<Experiences> {
    return this.repository.findById(id);
  }
  async deleteExperience(id: FindWhere<Experiences>): Promise<DeleteResult> {
    return this.repository.deleteEntity(id);
  }
  async updateExperience(
    id: FindWhere<Experiences>,
    experience: Experiences
  ): Promise<UpdateResult> {
    return this.repository.updateEntity(id, experience);
  }
}

export default new ExperienceService();
