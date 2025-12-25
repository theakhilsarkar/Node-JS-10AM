import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadPath = path.join(__dirname, "uploads");

app.use("/uploads", express.static(uploadPath));

mongoose
  .connect("mongodb://localhost:27017/multerFile")
  .then(() => console.log("mongodb connected successfully!"))
  .catch((err) => console.log(err.message));

const fileSchema = new mongoose.Schema(
  {
    title: String,
    genre: String,
    filename: String,
    filepath: String,
  },
  { timeStamp: true }
);

const File = mongoose.model("File", fileSchema);

// multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.post("/", upload.single("image"), async (req, res) => {
  try {
    const result = await File.insertOne({
      title: req.body.title,
      genre: req.body.genre,
      filename: req.file.filename,
      filepath: "/uploads/" + req.file.filename,
    });
    res.status(201).json({ message: "file uploaded !", result });
  } catch (err) {
    console.log("helloooo");
    res.status(404).json({ message: "file not uploaded !!", err: err });
  }
});

app.listen(4000, () => {
  console.log("server started !");
});

// input --> file
