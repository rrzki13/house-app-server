import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
    },
    icon: {
      type: String,
      default: "icon.png"
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("category", CategorySchema)

export default Category;
