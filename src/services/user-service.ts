import { DeleteResult, UpdateResult } from "typeorm";
import { FindWhere } from "../@types/types";
import { UserEntity } from "../entity/User";
import { UserRepository } from "../repositories/user-repository";
class UserService {
  private readonly repository: UserRepository;
  constructor() {
    this.repository = new UserRepository();
  }
  async findUsers(): Promise<UserEntity[]> {
    return this.repository.findUsers();
  }
  async createUser(user: Partial<UserEntity>): Promise<UserEntity> {
    return this.repository.createUser(user);
  }
  async findUserById(id: FindWhere<UserEntity>): Promise<UserEntity> {
    return this.repository.findUser(id);
  }
  async deleteUser(id: FindWhere<UserEntity>): Promise<DeleteResult> {
    return this.repository.deleteUser(id);
  }
  async updateUser(
    id: FindWhere<UserEntity>,
    user: Partial<UserEntity>
  ): Promise<UpdateResult> {
    return this.repository.updateUser(id, user);
  }
}

export default new UserService();
