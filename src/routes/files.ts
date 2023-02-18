import express from "express";
import path from "path";
import fs from "fs";
import config from "../config";

const Main = express.Router();

Main.get("/download", function (req, res, next) {
  try {
    const { name, route } = req.query;
    if (!name || !route) {
      throw "Query name and route is required";
    }
    // handle file not found
    const pathName = config.rootPath + `/../public/${route}/` + name.toString();
    if (!fs.existsSync(pathName)) {
      throw "Your file not found";
    }

    const filepath = path.resolve(pathName);

    // Set the Content-Disposition header to change the filename
    const date = new Date().getTime();
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${date}-${name}"`
    );

    const filestream = fs.createReadStream(filepath);
    filestream.pipe(res);
  } catch (err: any) {
    const response: IResponse = {
      status: false,
      meta: {
        code: 500,
        message: err.message ?? "Failed to get file",
      },
      data: err,
    };

    return res.status(response.meta.code).json(response);
  }
});

export default Main;
