import express from "express";
import { fileURLToPath } from "url";
import path from "path";
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filepath = path.join(__dirname, "public");

console.log(__filename);
console.log(__dirname);
console.log(filepath);

app.use(express.static(filepath)); // detailed path

const todo = [
  {
    id: 1,
    title: "Read Book",
    description: "Atomic Habit, start from page. 59",
  },
];

app.get("/", (req, res) => {
  console.log("page loaded....");
  res.send("Home Page");
});

app.get("/api/get", (req, res) => {
  res.json(todo);
});

app.listen(4000, () => {
  console.log("server started..");
});

// thursday - 10-11
//
