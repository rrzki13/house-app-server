import { Request, Response } from "express";
import Category from "../models/category.model";

class CategoryController {
  public static async index(req: Request, res: Response): Promise<Response> {
    let response: IResponse | null = null;
    try {
      const data = await Category.find();

      if (data.length === 0) {
        response = {
          status: false,
          meta: {
            code: 404,
            message: "Data not found",
          },
          data: [],
        };
      } else {
        response = {
          status: true,
          meta: {
            code: 200,
            message: "Data successfuly fetched",
          },
          data,
        };
      }

      return res.status(response.meta.code).json(response);
    } catch (error: any) {
      response = {
        status: false,
        meta: {
          code: 500,
          message: error.message ?? "Internal server error",
        },
        data: error,
      };

      return res.status(response.meta.code).json(response);
    }
  }

  public static async create(req: Request, res: Response): Promise<Response> {
    let response: IResponse | null = null;
    try {
      const { name } = req.body;
      let category = new Category({ name });
      if (req.file) {
        category = new Category({ name, icon: req.file.filename });
      }
      const data = await category.save();

      if (!data) {
        response = {
          status: false,
          meta: {
            code: 400,
            message: "Failed to insert data",
          },
          data: [],
        };
      } else {
        response = {
          status: true,
          meta: {
            code: 200,
            message: "Success insert data",
          },
          data,
        };
      }

      return res.status(response.meta.code).json(response);
    } catch (error: any) {
      response = {
        status: false,
        meta: {
          code: 500,
          message: error.message ?? "Internal server error",
        },
        data: error,
      };

      return res.status(response.meta.code).json(response);
    }
  }
}

export default CategoryController;
