import { DeleteResult, UpdateResult } from "typeorm";
import { IUser } from "../@types/user.type";
import { UserEntity } from "../entity/User";
import { CustomRepository } from "./custom-repository";

export class UserRepository extends CustomRepository<UserEntity> {
  constructor() {
    super();
  }

  /**
   * @description Find all users
   * @returns {Promise<UserEntity[]>}
   */

  async findAll(): Promise<UserEntity[]> {
    return UserEntity.getRepository().find();
  }

  /**
   * @description Create user
   * @param user
   * @returns {Promise<UserEntity>}
   */

  async createUser(user: IUser): Promise<UserEntity> {
    return UserEntity.getRepository().save({
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

  async findUserById(id: string): Promise<UserEntity> {
    return UserEntity.getRepository().findOneBy({
      id,
    });
  }

  /**
   * @description Delete user by id
   * @param id
   * @returns {Promise<DeleteResult>}
   */

  async deleteUser(id: string): Promise<DeleteResult> {
    return UserEntity.getRepository().delete(id);
  }

  /**
   * @description Update user by id
   * @param id
   * @param user
   * @returns {Promise<UpdateResult>}
   */

  async updateUser(id: string, user: IUser): Promise<UpdateResult> {
    return UserEntity.getRepository().update(
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
