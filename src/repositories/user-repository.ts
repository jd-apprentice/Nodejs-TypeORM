import { DeleteResult, UpdateResult } from "typeorm";
import { IUser } from "../@types/user.type";
import { UserEntity } from "../entity/User";
import { CustomRepository } from "./custom-repository";

export class UserRepository extends CustomRepository<UserEntity> {
  constructor() {
    super();
  }

  /**
   * @memberof UserRepository
   * @description Access to the entity manager
   * @returns {UserEntity}
   */

  getRepository(): typeof UserEntity {
    return UserEntity;
  }

  /**
   * @description Find all users
   * @returns {Promise<UserEntity[]>}
   */

  async findAll(): Promise<UserEntity[]> {
    return this.getRepository().find({
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

  async createUser(user: IUser): Promise<UserEntity> {
    return this.getRepository().save({
      first_name: user.first_name,
      last_name: user.last_name,
      age: +user.age,
      date_of_birth: user.date_of_birth,
      likes: user.likes,
      experiences: user.experiences,
      educations: user.educations,
    });
  }

  /**
   * @description Find user by id
   * @param id
   * @returns {Promise<UserEntity>}
   */

  async findUserById(id: number): Promise<UserEntity> {
    return this.getRepository().findOneBy({
      id,
    });
  }

  /**
   * @description Delete user by id
   * @param id
   * @returns {Promise<DeleteResult>}
   */

  async deleteUser(id: number): Promise<DeleteResult> {
    return this.getRepository().delete(id);
  }

  /**
   * @description Update user by id
   * @param id
   * @param user
   * @returns {Promise<UpdateResult>}
   */

  async updateUser(id: number, user: IUser): Promise<UpdateResult> {
    return this.getRepository().update(
      { id },
      {
        first_name: user.first_name,
        last_name: user.last_name,
        age: +user.age,
        date_of_birth: user.date_of_birth,
        likes: user.likes,
        experiences: user.experiences,
        educations: user.educations,
        role: user.role,
      }
    );
  }
}
