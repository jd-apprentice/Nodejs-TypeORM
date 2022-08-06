import { DeleteResult, FindOneOptions, UpdateResult } from "typeorm";
import { FindWhere } from "../@types/types";
import { Educations } from "../entity";
import { EducationsRepository } from "../repositories";

class EducationService {
  private readonly repository: EducationsRepository;
  constructor() {
    this.repository = new EducationsRepository();
  }
  async findEducations(): Promise<Educations[]> {
    return this.repository.findAll();
  }
  async createEducation(Education: Partial<Educations>): Promise<Educations> {
    return this.repository.createEntity(Education as Educations);
  }
  async findEducationById(
    id: FindOneOptions<Educations>
  ): Promise<Educations> {
    return this.repository.findById(id);
  }
  async deleteEducation(id: FindWhere<Educations>): Promise<DeleteResult> {
    return this.repository.deleteEntity(id);
  }
  async updateEducation(
    id: FindWhere<Educations>,
    Education: Educations
  ): Promise<UpdateResult> {
    return this.repository.updateEntity(id, Education);
  }
}

export default new EducationService();
