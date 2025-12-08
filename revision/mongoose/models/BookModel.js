import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
});

export const Book = mongoose.model("book", bookSchema);
