import { Request, Response } from "express";
import { ID } from "../@types/types";
import { EducationService, RoleService } from "../services/index";

class RoleController {
  /**
   * @description This method is used to get all Roles
   * @param req - Request object
   * @param res - Response object
   * @returns {Promise<Response>}
   */

  async count(req: Request, res: Response): Promise<Response> {
    try {
      return res.json({
        count: (await RoleService.findRole()).length,
      });
    } catch (error) {
      return res.json({
        message: error.message,
        success: false,
      });
    }
  }

  /**
   * @description This method is used to get all Roles
   * @param req - Request object
   * @param res - Response object
   * @returns {Promise<Response>}
   */

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      return res.json(await RoleService.findRole());
    } catch (error) {
      return res.json({
        message: error.message,
        success: false,
      });
    }
  }

  /**
   * @description This method is used to create a new Role
   * @param req - Request object
   * @param res - Response object
   * @returns {Promise<Response>}
   */

  async create(req: Request, res: Response): Promise<Response> {
    try {
      await RoleService.createRole(req.body);
      return res.json({
        message: "Role created",
        success: true,
      });
    } catch (error) {
      return res.json({
        message: error.message,
        success: false,
      });
    }
  }

  /**
   * @description This method is used to get a Role by id
   * @param req - Request object
   * @param res - Response object
   * @returns {Promise<Response>}
   */

  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const { id }: ID = req.params;
      const RoleData = await RoleService.findRoleById(id);
      return res.json({
        Role: RoleData,
      });
    } catch (error) {
      return res.json({
        message: error.message,
        success: false,
      });
    }
  }

  /**
   * @description This method is used to delete a Role by id
   * @param req - Request object
   * @param res - Response object
   * @returns {Promise<Response>}
   */

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id }: ID = req.params;
      const RoleExists = await RoleService.findRoleById(id);
      RoleExists
        ? (await RoleService.deleteRole(id)) &&
          res.json({
            message: "Role deleted",
          })
        : res.json({
            message: "Role does not exist",
          });
    } catch (error) {
      return res.json({
        message: error.message,
        success: false,
      });
    }
  }

  /**
   * @description This method is used to update a Role by id
   * @param req - Request object
   * @param res - Response object
   * @returns {Promise<Response>}
   */

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id }: ID = req.params;
      await RoleService.updateRole(id, req.body);
      return res.json({
        message: "Role updated",
      });
    } catch (error) {
      return res.json({
        message: error.message,
        success: false,
      });
    }
  }
}

export default new RoleController();
