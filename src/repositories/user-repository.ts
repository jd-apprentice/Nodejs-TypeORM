import {
  DeleteResult,
  FindOneOptions,
  Repository,
  UpdateResult,
} from "typeorm";
import { Source } from "../data-source";
import { UserEntity } from "../entity/User";
import { CustomRepository } from "./custom-repository";
export class UserRepository extends CustomRepository<UserEntity> {
  constructor() {
    super(UserEntity, Source.manager);
  }

  /**
   * @description Find all users
   * @returns {Promise<UserEntity[]>}
   */

  async findUsers(): Promise<UserEntity[]> {
    return this.findAll({
      relations: {
        experiences: true,
        educations: true,
      },
    });
  }

  /**
   * @description Create user
   * @param user
   * @returns {Promise<UserEntity>}
   */

  async createUser(user: Partial<UserEntity>): Promise<UserEntity> {
    return this.createEntity(user as UserEntity);
  }

  /**
   * @description Find user by id
   * @param id
   * @returns {Promise<UserEntity>}
   */

  async findUserById(id: FindOneOptions): Promise<UserEntity> {
    return this.findById(id);
  }

  /**
   * @description Delete user by id
   * @param id
   * @returns {Promise<DeleteResult>}
   */

  async deleteUser(id: number): Promise<DeleteResult> {
    return this.deleteEntity(id);
  }

  /**
   * @description Soft delete entity by id
   * @param id
   * @returns {Promise<DeleteResult>}
   */

  async softDeleteUser(id: number): Promise<DeleteResult> {
    return this.softEntity(id);
  }

  /**
   * @description Update user by id
   * @param id
   * @param user
   * @returns {Promise<UpdateResult>}
   */

  async updateUser(
    id: FindOneOptions,
    user: Partial<UserEntity>
  ): Promise<UpdateResult> {
    return this.updateEntity(id, user);
  }
}
