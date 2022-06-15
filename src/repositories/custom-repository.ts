import {
  BaseEntity,
  DeleteResult,
  FindManyOptions,
  FindOneOptions,
  Repository,
  UpdateResult,
} from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

export class CustomRepository<T> extends Repository<T> {
  /**
   * @description Find all entities
   * @memberof CustomRepository
   * @returns {Promise<T[]>}
   */

  async findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return this.find(options);
  }

  /**
   * @description Find entity by id
   * @param {T} id
   * @memberof CustomRepository
   * @returns {Promise<T>}
   */

  async findById(id: FindOneOptions<T>): Promise<T> {
    return this.findOne(id);
  }

  /**
   * @description Create entity
   * @param {T} entity
   * @memberof CustomRepository
   * @returns {Promise<T>}
   */

  async createEntity(entity: T): Promise<T> {
    return this.save(entity);
  }

  /**
   * @description Update entity by id
   * @param {number} id
   * @param {T} entity
   * @memberof CustomRepository
   * @returns {Promise<UpdateResult>}
   */

  async updateEntity(
    id: FindOneOptions<T>,
    entity: QueryDeepPartialEntity<T>
  ): Promise<UpdateResult> {
    return this.update(+id, entity);
  }

  /**
   * @description Delete entity by id
   * @param {number} id
   * @memberof CustomRepository
   * @returns {Promise<DeleteResult>}
   */

  async deleteEntity(id: number): Promise<DeleteResult> {
    return this.delete(id);
  }

  /**
   * @description Soft delete entity by id
   * @param id
   * @memberof CustomRepository
   * @returns {Promise<DeleteResult>}
   */

  async softEntity(id: number): Promise<DeleteResult> {
    return this.softDelete(id);
  }
}
