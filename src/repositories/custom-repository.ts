import { BaseEntity, DeleteResult, Repository, UpdateResult } from "typeorm";
import { Source } from "../data-source";

export class CustomRepository<T> extends Repository<T> {
  protected constructor() {
    super(BaseEntity, Source.manager);
  }

  /**
   * @description Find all entities
   * @memberof CustomRepository
   * @returns {Promise<T[]>}
   */

  async findAll(): Promise<T[]> {
    return this.find();
  }

  /**
   * @description Find entity by id
   * @param {string} id
   * @memberof CustomRepository
   * @returns {Promise<T>}
   */

  async findById(id: T): Promise<T> {
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
   * @param {string} id
   * @param {T} entity
   * @memberof CustomRepository
   * @returns {Promise<T>}
   */

  async updateEntity(id: T, entity: T): Promise<UpdateResult> {
    return this.update(id, entity);
  }

  /**
   * @description Delete entity by id
   * @param {string} id
   * @memberof CustomRepository
   * @returns {Promise<DeleteResult>}
   */

  async deleteEntity(id: T): Promise<DeleteResult> {
    return this.delete(id);
  }
}
