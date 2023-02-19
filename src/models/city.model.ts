import mongoose from "mongoose";

const CitySchema = new mongoose.Schema(
  {
    cityName: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      default: "city.jpg"
    },
  },
  { timestamps: true }
);

const City = mongoose.model("city", CitySchema);

export default City;
