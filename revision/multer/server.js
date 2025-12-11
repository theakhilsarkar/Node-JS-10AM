import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadPath = path.join(__dirname, "uploads");

mongoose
  .connect("mongodb://localhost:27017/multerFile")
  .then(() => console.log("mongodb connected successfully!"))
  .catch((err) => console.log(err.message));

const fileSchema = new mongoose.Schema(
  {
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
      filename: req.file.filename,
      filepath: req.filepath,
    });
    res.status(201).json({ message: "file uploaded !", result });
  } catch (err) {
    res.status(500).json({ message: "file not uploaded !!" });
  }
});

app.listen(4000, () => {
  console.log("server started !");
});

// input --> file