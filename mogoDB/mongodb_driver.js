import { MongoClient } from "mongodb";

// node js + express
// MERN

// client -> req(get,post,put,delete) -> server -> database(mongoDB)

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
export const addUser = async (customer) => {
  const db = await connectDB();
  const result = await db.collection("customers").insertOne(customer);
  return result;
};

export const readUser = async () => {
  const db = await connectDB();
  const customers = db.collection("customers").find().toArray();
  return customers;
};

export const updateUser = async () => {
  const db = await connectDB();
  const result = await db.collection("customers").updateOne(
    { customer_id: 1 },
    {
      $set: {
        address: "Mumbai",
      },
    }
  );
  return result;
};

export const deleteUser = async () => {
  const db = await connectDB();
  const result = await db.collection("customers").deleteOne({ customer_id: 1 });
  return result;
};

// create a employee management system, perform basic crud operation by express and also align with mongoDB.

// minimum 6 key-value
// also provide filteration - all,by id, by role, by name


// 10 company 

//

// 