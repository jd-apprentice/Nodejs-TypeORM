import { IUser } from "../@types/user.type";
import { UserEntity } from "../entity/User";
import { UserRepository } from "../repositories/user-repository";

export class UserService {
  static async findUsers(): Promise<UserEntity[]> {
    return UserRepository.findAll();
  }
  static async createUser(user: IUser): Promise<UserEntity> {
    return UserRepository.createUser(user);
  }
  static async findUserById(id: string): Promise<UserEntity> {
    return UserRepository.findUserById(id);
  }
  static async deleteUser(id: string): Promise<UserEntity> {
    return UserRepository.deleteUser(id);
  }
  static async updateUser(id: string, user: IUser): Promise<UserEntity> {
    return UserRepository.updateUser(id, user);
  }
}
