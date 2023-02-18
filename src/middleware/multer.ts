import { Request } from "express";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";

const storage = multer.diskStorage({
  destination: function (req: Request, file, cb) {
    cb(null, `public/${file.fieldname}/`);
  },
  filename: function (req, file: Express.Multer.File, cb) {
    const originalName = file.originalname;
    const originalExt = originalName.substring(originalName.lastIndexOf("."));
    const filename = uuidv4() + originalExt;

    cb(null, filename);
  }
});

const upload = multer({ storage });

export default upload;
