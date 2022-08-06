import { DeleteResult, UpdateResult } from "typeorm";
import { FindWhere } from "../@types/types";
import { IUser } from "../@types/user.type";
import { Source } from "../data-source";
import { Educations } from "../entity/Educations";
import { Experiences } from "../entity/Experiences";
import { Role } from "../entity/Role";
import { UserEntity } from "../entity/User";
import { ExperienceService } from "../services";
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
        role: true,
      },
    });
  }

  /**
   * @description Create user
   * @param user
   * @returns {Promise<UserEntity>}
   */

  async createUser(user: Partial<UserEntity>): Promise<UserEntity> {
    return (
      (await Experiences.save(user.experiences || [])) &&
      (await Educations.save(user.educations || [])) &&
      (await Role.save(user.role || {})) &&
      (await this.createEntity(user as UserEntity))
    );
  }

  /**
   * @description Find user by id
   * @param id
   * @returns {Promise<UserEntity>}
   */

  async findUser(id: FindWhere<UserEntity>): Promise<UserEntity> {
    return this.findById({
      where: { id } as FindWhere<UserEntity>,
      relations: {
        experiences: true,
        educations: true,
        role: true,
      },
    });
  }

  /**
   * @description Delete user by id
   * @param id
   * @returns {Promise<DeleteResult>}
   */

  async deleteUser(id: FindWhere<UserEntity>): Promise<DeleteResult> {
    return this.deleteEntity(id);
  }

  /**
   * @description Soft delete entity by id
   * @param id
   * @returns {Promise<DeleteResult>}
   */

  async softDeleteUser(id: FindWhere<UserEntity>): Promise<DeleteResult> {
    return this.softEntity(id);
  }

  /**
   * @description Update user by id
   * @param id
   * @param user
   * @returns {Promise<UpdateResult>}
   */

  async updateUser(
    id: FindWhere<UserEntity>,
    user: IUser
  ): Promise<UpdateResult> {
    return this.updateEntity(id, user);
  }
}
