import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import fs from "fs";

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

// multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); //
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

// query - ?
// param - :id
// body - {}

app.delete("/upload", async (req, res) => {
  try {
    const file = await File.findById(req.query.id);
    console.log(file.filepath);
    // remove from storage/folder
    if (fs.existsSync(file.filepath)) {
      console.log("entered in condition....");
      fs.unlinkSync(file.filepath);
    }
    // remove from database
    await File.findByIdAndDelete(req.query.id);
    res.json({ message: "Book deleted" });
  } catch (err) {
    res.status(500).json({ message: "Book Not Deleted", err: err.message });
  }
});

app.listen(3000, () => {
  console.log("server started....");
});

// text -> mongodb

// mongodb - store only text & number
// file - multer

// post
// get file -> store in own uploads folder -> store path in mongodb

// update
// 1. remove old image
// 2. place new image
// 3. update image path.

// delete
// 1. delete from database,
// 2. delete from folder

// title , author, price, coverimage
//
