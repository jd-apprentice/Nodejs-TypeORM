import { UpdateResult } from "typeorm";
import { IUser } from "../@types/user.type";
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
  async createUser(user: IUser): Promise<UserEntity> {
    return this.repository.createUser(user);
  }
  async findUserById(id: string): Promise<UserEntity> {
    return this.repository.findUserById(id);
  }
  async deleteUser(id: string) {
    return this.repository.deleteUser(id);
  }
  async updateUser(id: string, user: IUser): Promise<UpdateResult> {
    return this.repository.updateUser(id, user);
  }
}

export default new UserService();
