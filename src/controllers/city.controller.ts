import { Request, Response } from "express";
import City from "../models/city.model";

class CityController {
  public static async index(req: Request, res: Response): Promise<Response> {
    let response: IResponse | null = null;
    try {
      const data = await City.find();
      if (data.length === 0) {
        response = {
          status: false,
          meta: {
            code: 404,
            message: "Data not found",
          },
          data,
        };
        return res.status(response.meta.code).json(response);
      }

      response = {
        status: true,
        meta: {
          code: 200,
          message: "Data successfuly fetched",
        },
        data,
      };

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
      const city = new City({ cityName: name });
      if (req.file) {
        city.thumbnail = req.file.filename;
      }

      const data = await city.save();
      if (!data) {
        response = {
          status: false,
          meta: {
            code: 400,
            message: "Failed to insert data",
          },
          data,
        };
        return res.status(response.meta.code).json(response);
      }

      response = {
        status: true,
        meta: {
          code: 200,
          message: "Data successfuly inserted",
        },
        data,
      };

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

export default CityController;
