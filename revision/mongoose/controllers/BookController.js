import { Book } from "../models/BookModel.js";

export const addBook = async (req, res) => {
  try {
    const result = await Book.insertOne(req.body);
    res.status(201).json({ msg: "record inserted successfully !", result });
  } catch (err) {
    res.status(400).json({ msg: "insertion failed !", err: err.message });
  }
};

export const getBooks = async (req, res) => {
  try {
    const result = await Book.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};
