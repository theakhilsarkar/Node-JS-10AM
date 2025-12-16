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

// syncronous & asyncronous programming

// defination must be in english.
// syncronous - execute code line by line.
// asyncronous - its doesn't intrupt execution process.
// network request, api calling, get data from files, get data from database.
// timer function

// .then().catch()

// await async, try..catch

// if network request resolved successfully, then we will enter in then block, if not then we will enter in catch block, where you get error object.

// exception(error) handling

// 4xx - client
// 5xx - server

// runtime error -
// compile time error - all syntax error
// solution of compile time error -

// code write
// code compile --> command to move next step(run), compilte time error
// code run --> runtime error, after successfull run --> result

// try...catch

// fetch("api_url").then((res) => res.json());
// then((data) => {
//   console.log(data);
// }).catch();

// async,await ->

// try...catch -
// try - we will write code in try for testing., if errpr ocuur then sent it to catch block

// database, file, request handling

// const api_call = async () => {
//   try {
//     const res = await fetch("api_url");
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err.message);
//   }
// };


