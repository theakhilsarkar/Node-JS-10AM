import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filepath = path.join(__dirname, "public");

console.log(__filename);
console.log(__dirname);
console.log(filepath);

const app = express();

app.use(express.static(filepath)); // detailed path

app.get("/", (req, res) => {
  console.log("page loaded....");
  res.send("Home Page");
});

app.get("/api/")

app.listen(4000, () => {
  console.log("server started..");
});

// thursday - 10-11

