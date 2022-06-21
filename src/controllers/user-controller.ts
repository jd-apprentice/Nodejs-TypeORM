import { Request, Response } from "express";
import { ID } from "../@types/types";
import { UserEntity } from "../entity/User";
import UserService from "../services/user-service";

class UserController {
  /**
   * @description This method is used to get all users
   * @param req
   * @param res
   * @returns {Promise<Response>}
   */

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const userData = await UserService.findUsers();
      return res.json({
        users: userData,
      });
    } catch (error) {
      return res.json({
        message: "There are no users to show",
        success: false,
      });
    }
  }

  /**
   * @description This method is used to create a new user
   * @param req
   * @param res
   * @returns {Promise<Response>}
   */

  async create(req: Request, res: Response): Promise<Response> {
    try {
      await UserService.createUser(req.body);
      return res.json({
        message: "User created",
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
   * @description This method is used to get a user by id
   * @param req
   * @param res
   * @returns {Promise<Response>}
   */

  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const { id }: ID = req.params;
      const userData = await UserService.findUserById(id);
      return res.json({
        user: userData,
      });
    } catch (error) {
      return res.json({
        message: error.message,
        success: false,
      });
    }
  }

  /**
   * @description This method is used to delete a user by id
   * @param req
   * @param res
   * @returns {Promise<Response>}
   */

  async deleteUser(req: Request, res: Response): Promise<Response> {
    try {
      const { id }: ID = req.params;
      const userExists = await UserService.findUserById(id);
      userExists
        ? (await UserService.deleteUser(id)) &&
          res.json({
            message: "User deleted",
          })
        : res.json({
            message: "User does not exist",
          });
    } catch (error) {
      return res.json({
        message: error.message,
        success: false,
      });
    }
  }

  /**
   * @description This method is used to update a user by id
   * @param req
   * @param res
   * @returns {Promise<Response>}
   */

  async updateUser(req: Request, res: Response): Promise<Response> {
    try {
      const { id }: any = req.params;
      await UserService.updateUser(id, req.body);
      return res.json({
        message: "User updated",
      });
    } catch (error) {
      return res.json({
        message: error.message,
        success: false,
      });
    }
  }
}

export default new UserController();
