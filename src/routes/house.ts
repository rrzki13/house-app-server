import express from "express";
import HouseController from "../controllers/house.controller";
import upload from "../middleware/multer";

const House = express.Router();

House.get("/", HouseController.index);
House.post("/", upload.single("house-thumbnail"), HouseController.create);

export default House;
