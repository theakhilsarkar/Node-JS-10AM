import { addBook } from "../controllers/BookController.js";
import express from "express";

const router = express.Router();

router.post("/", addBook);

export default router;
