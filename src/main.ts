import express, { NextFunction, Request, Response } from "express";
import multer from "multer";
import config from "./config";
import connection from "./db";
import Category from "./routes/category";
import City from "./routes/city";
import Main from "./routes/files";
import House from "./routes/house";

const app = express();
connection;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "../public")));

app.get("/", function (req, res, next) {
  res.send("Hello World! My Name Is Rizki Ramadhan");
});

app.use("/house", House)
app.use("/category", Category)
app.use("/city", City)
app.use("/main", Main)

// Handle errors
app.use((err: any, req: Request, res: Response, next: NextFunction) => {  
  let response : IResponse | {} = {}
  if (err instanceof multer.MulterError) {
    // Multer error occurred
    response = {
      status: false,
      meta: {
        code: 422,
        message: err.message ?? "Failed to upload file"
      },
      data: err
    }
  } else {
    response = {
      status: false,
      meta: {
        code: 500,
        message: err.message ?? "Internal server error"
      },
      data: err
    }
  }
  res.status(500).json(response);
});

const port = config.port || 5000;

app.listen(port, function () {
  console.log(`Server is running on http://localhost:${port}`);
});
