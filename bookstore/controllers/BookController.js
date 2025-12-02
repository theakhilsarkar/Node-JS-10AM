import Book from "../models/BookModel.js";

export const addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body); // to create a document in database
    res.status(201).json({ message: "Book Inserted !", record: book });
  } catch (err) {
    console.log("book insertion failed error : ", err);
    res.json({ message: "Insertion Failed !", err: err.message });
  }
};
