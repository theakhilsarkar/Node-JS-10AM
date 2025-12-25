import mongoose from "mongoose";
import mongodb from "mongodb";

// 1. db connection
const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/students")
    .then(() => console.log("MongoDB Connected Successfully !!"))
    .catch((err) => console.log(err.message));
};

// 2. define schema
const studentSchema = mongoose.Schema({
  name: String,
  age: Number,
  course: String,
  std: Number,
});

// 3. define model/collection
const Student = mongoose.model("students", studentSchema);

// 4. perform crud
export const insertStudent = (student) => {
  connectDB();
  const newStudent = new Student(student);
  newStudent.save();
};

export const readStudents = async () => {
  connectDB();
  const data = await Student.find();
  return data;
};

// UPDATE students SET age = 20 WHERE id=2;
export const updateStudent = (student) => {
  connectDB();
  Student.updateOne({ _id: student._id }, student);
};

export const deleteStudent = (id) => {
  connectDB();
  Student.deleteOne({ _id: id });
};



// folder structure - logic + code - optional
// structure + organized


// model - structure
// view/server - api/express 
// controller - logic - crud & filteration functions

// BookStore
//   -- frontend/react js
//      -- 
//   -- backend/ node js
//      -- 

// .....js 

// emp