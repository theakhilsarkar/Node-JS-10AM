import { MongoClient } from "mongodb";
import express from "express";

const app = express();

const client = new MongoClient("mongodb://127.0.0.1:27017");

const connectDB = async () => {
  await client.connect(); // conncet database
  const db = client.db("employee"); // create a employee database in mongodb
  console.log("Database connected successfully !!");
  return db;
};

const addEmployee = async () => {
  const db = await connectDB();
  const result = await db.collection("employee").insertOne({
    name: "Aman Gupta",
    role: "Backend Devloper",
    salary: 120000,
  });
  console.log("employee inserted on this id:  " + result.insertedId);
};

export const getEmployee = async () => {
  const db = await connectDB();
  const data = await db.collection("employee").find().toArray();
  return data;
};

app.get("/", async (req, res) => {
  const data = await getEmployee();
  res.json(data);
});

app.listen(4000, () => {
  console.log("server started !!!");
});
