import express from "express";
import { addUser, readUser, deleteUser, updateUser } from "./mongodb_driver.js";

const app = express();

app.use(express.json());

app.get("/api", async (req, res) => {
  const customers = await readUser();
  res.json(customers);
});

app.post("/api", async (req, res) => {
  const customer = req.body;
  console.log(customer);
  const result = await addUser(customer);
  res.json(result);
});

app.listen(4000, () => {
  console.log("server started....");
});
