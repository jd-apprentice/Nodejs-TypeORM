import { DeleteResult, UpdateResult } from "typeorm";
import { Educations } from "../entity/Educations";
import { Experiences } from "../entity/Experiences";
import { UserEntity } from "../entity/User";
import { CustomRepository } from "./custom-repository";
export class UserRepository extends CustomRepository<UserEntity> {
  constructor() {
    super();
  }

  /**
   * @description Initialize all entities
   */

  private userRepository(): typeof UserEntity {
    return UserEntity;
  }

  private experienceRepository(): typeof Experiences {
    return Experiences;
  }

  private educationRepository(): typeof Educations {
    return Educations;
  }

  /**
   * @description Find all users
   * @returns {Promise<UserEntity[]>}
   */

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository().find({
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
    await this.experienceRepository().save(user.experiences as Experiences[]);
    await this.educationRepository().save(user.educations as Educations[]);
    return this.userRepository().save(user as UserEntity);
  }

  /**
   * @description Find user by id
   * @param id
   * @returns {Promise<UserEntity>}
   */

  async findUserById(id: number): Promise<UserEntity> {
    return this.userRepository().findOneBy({ id });
  }

  /**
   * @description Delete user by id
   * @param id
   * @returns {Promise<DeleteResult>}
   */

  async deleteUser(id: number): Promise<DeleteResult> {
    return this.userRepository().delete(id);
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
    id: number,
    user: Partial<UserEntity>
  ): Promise<UpdateResult> {
    return this.userRepository().update({ id }, user);
  }
}
