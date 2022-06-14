import { DeleteResult, UpdateResult } from "typeorm";
import { UserEntity } from "../entity/User";
import { UserRepository } from "../repositories/user-repository";
class UserService {
  private readonly repository: UserRepository;
  constructor() {
    this.repository = new UserRepository();
  }
  async findUsers(): Promise<UserEntity[]> {
    return this.repository.findAll();
  }
  async createUser(user: Partial<UserEntity>): Promise<UserEntity> {
    return this.repository.createUser(user);
  }
  async findUserById(id: number): Promise<UserEntity> {
    return this.repository.findUserById(id);
  }
  async deleteUser(id: number): Promise<DeleteResult> {
    return this.repository.deleteUser(id);
  }
  async updateUser(
    id: number,
    user: Partial<UserEntity>
  ): Promise<UpdateResult> {
    return this.repository.updateUser(id, user);
  }
}

export default new UserService();
