import mongoose from "mongoose";

const CitySchema = new mongoose.Schema(
  {
    cityName: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
    },
  },
  { timestamps: true }
);

const City = mongoose.model("city", CitySchema);

export default City;
