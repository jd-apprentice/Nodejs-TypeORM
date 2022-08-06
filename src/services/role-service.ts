import { DeleteResult, FindOneOptions, UpdateResult } from "typeorm";
import { FindWhere } from "../@types/types";
import { Role } from "../entity/index";
import { RoleRepository } from "../repositories";

class RoleService {
  private readonly repository: RoleRepository;
  constructor() {
    this.repository = new RoleRepository();
  }
  async findRole(): Promise<Role[]> {
    return this.repository.findAll();
  }
  async createRole(role: Partial<Role>): Promise<Role> {
    return this.repository.createEntity(role as Role);
  }
  async findRoleById(id: FindOneOptions<Role>): Promise<Role> {
    return this.repository.findById(id);
  }
  async deleteRole(id: FindWhere<Role>): Promise<DeleteResult> {
    return this.repository.deleteEntity(id);
  }
  async updateRole(id: FindWhere<Role>, user: Role): Promise<UpdateResult> {
    return this.repository.updateEntity(id, user);
  }
}

export default new RoleService();
