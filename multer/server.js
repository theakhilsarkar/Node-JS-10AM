import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";

const app = express();

const filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(filename);
const uploadPath = path.join(_dirname, "uploads");

mongoose
  .connect("mongodb://localhost:27017/multer")
  .then(() => console.log("mongodb connected successfully !!"))
  .catch((err) => console.log("connection failed ", err));

const fileSchema = new mongoose.Schema({
  filename: String,
  filepath: String,
});
const File = mongoose.model("File", fileSchema);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });
app.use("/uploads", express.static(uploadPath));

app.post("/upload", upload.single("image"), (req, res) => {
  const file = new File({
    filename: req.file.name,
    filepath: req.file.path,
  });
  file.save();
  res.json({ message: "Image uploaded successfully", file });
});

app.listen(3000, () => {
  console.log("server started....");
});
