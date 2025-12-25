import express from "express";
import book_routes from "./routes/BookRoutes.js";
import { connectDB } from "./config/db.js";

const app = express();
connectDB();

app.use(express.json());

app.use("/api", book_routes);

app.use("/", (req, res) => {
  res.status(404).json({ msg: "Try POST request..", err: "page not found" });
});

app.listen(1818, () => {
  console.log("server started on port-1818");
});
