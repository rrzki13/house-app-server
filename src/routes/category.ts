import express from "express";
import CategoryController from "../controllers/category.controller";
import upload from "../middleware/multer";

const Category = express.Router();

Category.get("/", CategoryController.index);
Category.post("/", upload.single("category-icon"), CategoryController.create);

export default Category;
