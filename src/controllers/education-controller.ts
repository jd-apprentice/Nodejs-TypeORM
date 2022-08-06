import { Request, Response } from "express";
import { ID } from "../@types/types";
import { EducationService } from "../services/index";

class EducationController {
  /**
   * @description This method is used to get all Educations
   * @param req
   * @param res
   * @returns {Promise<Response>}
   */

  async count(req: Request, res: Response): Promise<Response> {
    try {
      return res.json({
        count: (await EducationService.findEducations()).length,
      });
    } catch (error) {
      return res.json({
        message: error.message,
        success: false,
      });
    }
  }

  /**
   * @description This method is used to get all Educations
   * @param req
   * @param res
   * @returns {Promise<Response>}
   */

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      return res.json(await EducationService.findEducations());
    } catch (error) {
      return res.json({
        message: error.message,
        success: false,
      });
    }
  }

  /**
   * @description This method is used to create a new Education
   * @param req
   * @param res
   * @returns {Promise<Response>}
   */

  async create(req: Request, res: Response): Promise<Response> {
    try {
      await EducationService.createEducation(req.body);
      return res.json({
        message: "Education created",
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
   * @description This method is used to get a Education by id
   * @param req
   * @param res
   * @returns {Promise<Response>}
   */

  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const { id }: ID = req.params;
      const EducationData = await EducationService.findEducationById(id);
      return res.json({
        Education: EducationData,
      });
    } catch (error) {
      return res.json({
        message: error.message,
        success: false,
      });
    }
  }

  /**
   * @description This method is used to delete a Education by id
   * @param req
   * @param res
   * @returns {Promise<Response>}
   */

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id }: ID = req.params;
      const EducationExists = await EducationService.findEducationById(id);
      EducationExists
        ? (await EducationService.deleteEducation(id)) &&
          res.json({
            message: "Education deleted",
          })
        : res.json({
            message: "Education does not exist",
          });
    } catch (error) {
      return res.json({
        message: error.message,
        success: false,
      });
    }
  }

  /**
   * @description This method is used to update a Education by id
   * @param req
   * @param res
   * @returns {Promise<Response>}
   */

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id }: ID = req.params;
      await EducationService.updateEducation(id, req.body);
      return res.json({
        message: "Education updated",
      });
    } catch (error) {
      return res.json({
        message: error.message,
        success: false,
      });
    }
  }
}

export default new EducationController();
