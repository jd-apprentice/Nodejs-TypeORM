import { UpdateResult } from "typeorm";
import { IUser } from "../@types/user.type";
import { postgressDataSource } from "../data-source";
import { UserEntity } from "../entity/User";
import { GenericRepository } from "./generic-repository";

export class UserRepository {
  /**
   * @description Find all users
   * @returns {Promise<UserEntity[]>}
   */

  static async findAll(): Promise<UserEntity[]> {
    return GenericRepository.getRepository(
      postgressDataSource,
      UserEntity
    ).find();
  }

  /**
   * @description Create user
   * @param user
   * @returns {Promise<UserEntity>}
   */

  static async createUser(user: IUser): Promise<UserEntity> {
    return GenericRepository.getRepository(
      postgressDataSource,
      UserEntity
    ).save({
      first_name: user.first_name,
      last_name: user.last_name,
      age: parseInt(user.age),
    });
  }

  /**
   * @description Find user by id
   * @param id
   * @returns {Promise<UserEntity>}
   */

  static async findUserById(id: string): Promise<UserEntity> {
    return GenericRepository.getRepository(
      postgressDataSource,
      UserEntity
    ).findOneBy({ id });
  }

  /**
   * @description Delete user by id
   * @param id
   * @returns {Promise<UserEntity>}
   */

  static async deleteUser(id: string): Promise<UserEntity> {
    return GenericRepository.getRepository(
      postgressDataSource,
      UserEntity
    ).delete(id);
  }

  /**
   * @description Update user by id
   * @param id
   * @param user
   * @returns {Promise<UserEntity>}
   */

  static async updateUser(id: string, user: IUser): Promise<UpdateResult> {
    return GenericRepository.getRepository(
      postgressDataSource,
      UserEntity
    ).update(
      { id },
      {
        first_name: user.first_name,
        last_name: user.last_name,
        age: parseInt(user.age),
        date_of_birth: user.date_of_birth,
      }
    );
  }
}
