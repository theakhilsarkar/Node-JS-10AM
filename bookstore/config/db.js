import mongoose from "mongoose";

export const conncetDB = async () => {
  // exception-error handling
  try {
    await mongoose.connect("mongodb://localhost:27017/bookstore");
    console.log("MongoDB Connected !!");
  } catch (err) {
    console.log("MongoDB Connection failed, error: ", err);
  }
};
