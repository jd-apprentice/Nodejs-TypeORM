import {
  DeleteResult,
  FindManyOptions,
  Repository,
  UpdateResult,
} from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { FindWhere, OptionsFind } from "../@types/types";

export class CustomRepository<T> extends Repository<T> {
  /**
   * @description Find all entities
   * @param {FindManyOptions<T>} options
   * @memberof CustomRepository
   * @returns {Promise<T[]>}
   */

  async findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return this.find(options);
  }

  /**
   * @description Find entity by id
   * @param {FindWhere<T>} id
   * @param {OptionsFind<T>} relations
   * @memberof CustomRepository
   * @returns {Promise<T>}
   */

  async findById(id?: FindWhere<T>, relations?: OptionsFind): Promise<T> {
    return this.createQueryBuilder("entity")
      .where("entity.id = :id", { id })
      .setParameter("id", id)
      .loadAllRelationIds(relations)
      .getOne();
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
   * @param {FindWhere<T>} id
   * @param {QueryDeepPartialEntity<T>} entity
   * @memberof CustomRepository
   * @returns {Promise<UpdateResult>}
   */

  async updateEntity(
    id?: FindWhere<T>,
    entity?: QueryDeepPartialEntity<T>
  ): Promise<UpdateResult> {
    return this.update(id, entity);
  }

  /**
   * @description Delete entity by id
   * @param {FindWhere<T>} id
   * @memberof CustomRepository
   * @returns {Promise<DeleteResult>}
   */

  async deleteEntity(id: FindWhere<T>): Promise<DeleteResult> {
    return this.delete(id);
  }

  /**
   * @description Soft delete entity by id
   * @param {FindWhere<T>}id
   * @memberof CustomRepository
   * @returns {Promise<DeleteResult>}
   */

  async softEntity(id: FindWhere<T>): Promise<DeleteResult> {
    return this.softDelete(id);
  }
}
