import mongoose from "mongoose";

const HouseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    thumbnail: {
      type: String,
      default: "thumbnail.png"
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "category",
      },
    ],
    city: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "city",
    },
  },
  {
    timestamps: true,
  }
);

const House = mongoose.model("house", HouseSchema);

export default House;
