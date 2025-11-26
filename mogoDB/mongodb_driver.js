import { MongoClient } from "mongodb";

// create client
const client = new MongoClient("mongodb://127.0.0.1:27017");

// connect with db
export const connectDB = async () => {
  await client.connect();
  console.log("Connected....");
  const db = client.db("customers");
  return db;
};

// add user
export const addUser = async () => {
  const db = await connectDB();
  await db.collection("customers").insertOne({
    name: "Hitesh Chaudhari",
    age: 33,
    address: "Banglore",
  });
};

addUser();
