import { IUser } from "../@types/user.type";
import { postgressDataSource } from "../data-source";
import { UserEntity } from "../entity/User";

export class UserRepository {
  /**
   * @description Find all users
   * @returns {Promise<UserEntity[]>}
   */

  static async findAll(): Promise<UserEntity[]> {
    const userRepository = postgressDataSource.getRepository(UserEntity);
    return userRepository.find();
  }

  /**
   * @description Create user
   * @param user
   * @returns {Promise<UserEntity>}
   */

  static async createUser(user: IUser): Promise<UserEntity> {
    const userRepository = postgressDataSource.getRepository(UserEntity);
    return userRepository.save({
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

  static async findUserById(id: any): Promise<UserEntity> {
    const userRepository = postgressDataSource.getRepository(UserEntity);
    return userRepository.findOneBy({ id });
  }

  /**
   * @description Delete user by id
   * @param id
   * @returns {Promise<UserEntity>}
   */

  static async deleteUser(id: any): Promise<UserEntity> {
    const userRepository = postgressDataSource.getRepository(UserEntity);
    const user = await userRepository.findOneBy({ id });
    return userRepository.remove(user);
  }

  /**
   * @description Update user by id
   * @param id
   * @param user
   * @returns {Promise<UserEntity>}
   */

  static async updateUser(id: any, user: IUser): Promise<UserEntity> {
    const userRepository = postgressDataSource.getRepository(UserEntity);
    const userToUpdate = await userRepository.findOneBy({ id });
    return userRepository.save({
      ...userToUpdate,
      first_name: user.first_name,
      last_name: user.last_name,
      age: parseInt(user.age),
      date_of_birth: user.date_of_birth,
    });
  }
}
