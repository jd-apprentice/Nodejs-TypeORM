import { Request, Response } from "express";
import { ID } from "../@types/types";
import { ExperienceService } from "../services/index";

class ExperienceController {
  /**
   * @description This method is used to get all experiences
   * @param req
   * @param res
   * @returns {Promise<Response>}
   */

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      return res.json(await ExperienceService.findExperiences());
    } catch (error) {
      return res.json({
        message: error.message,
        success: false,
      });
    }
  }

  /**
   * @description This method is used to create a new experience
   * @param req
   * @param res
   * @returns {Promise<Response>}
   */

  async create(req: Request, res: Response): Promise<Response> {
    try {
      await ExperienceService.createExperience(req.body);
      return res.json({
        message: "Experience created",
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
   * @description This method is used to get a experience by id
   * @param req
   * @param res
   * @returns {Promise<Response>}
   */

  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const { id }: ID = req.params;
      const experienceData = await ExperienceService.findExperienceById(id);
      return res.json({
        experience: experienceData,
      });
    } catch (error) {
      return res.json({
        message: error.message,
        success: false,
      });
    }
  }

  /**
   * @description This method is used to delete a experience by id
   * @param req
   * @param res
   * @returns {Promise<Response>}
   */

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id }: ID = req.params;
      const experienceExists = await ExperienceService.findExperienceById(id);
      experienceExists
        ? (await ExperienceService.deleteExperience(id)) &&
          res.json({
            message: "Experience deleted",
          })
        : res.json({
            message: "Experience does not exist",
          });
    } catch (error) {
      return res.json({
        message: error.message,
        success: false,
      });
    }
  }

  /**
   * @description This method is used to update a experience by id
   * @param req
   * @param res
   * @returns {Promise<Response>}
   */

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id }: ID = req.params;
      await ExperienceService.updateExperience(id, req.body);
      return res.json({
        message: "Experience updated",
      });
    } catch (error) {
      return res.json({
        message: error.message,
        success: false,
      });
    }
  }
}

export default new ExperienceController();
