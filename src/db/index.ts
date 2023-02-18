import mongoose from "mongoose";
import config from "../config";

mongoose.connect(config.mongo_url_dev!);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Database Connected");
});

export default connection;