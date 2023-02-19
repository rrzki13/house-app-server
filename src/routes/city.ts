import express from "express";
import CityController from "../controllers/city.controller";
import upload from "../middleware/multer";

const City = express.Router();

City.get("/", CityController.index);
City.post("/", upload.single("city-thumbnail"), CityController.create);

export default City;
