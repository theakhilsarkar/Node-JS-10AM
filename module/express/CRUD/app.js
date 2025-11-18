import express from "express";
const app = express();
const port = 5050;
app.use(express.json());

const students = [
  {
    id: 1,
    name: "Aman Gupta",
    age: 22,
    course: "B.Tech",
  },
  {
    id: 2,
    name: "Raj Sharma",
    age: 25,
    course: "B.B.A",
  },
  {
    id: 3,
    name: "Dharm Kumar",
    age: 21,
    course: "B.C.A",
  },
  {
    id: 4,
    name: "Akshay Kumar",
    age: 39,
    course: "B.Com",
  },
];

app.get("/api/get", (req, res) => {
  res.json(students);
});

app.get("/api/get/:id", (req, res) => {
  const userId = req.params.id;
  const user = students.find((student) => student.id == userId);
  if (user) {
    res.json(user);
  } else {
    res.json({
      message: "user not found!",
    });
  }
});

app.post("/api/post", (req, res) => {
  //   const user = req.query;
  //   const user = {
  //     id: id,
  //     name: name,
  //     age: age,
  //     course: course,
  //   };
  students.push(req.query);
  res.status(201).json(students);
});

app.post("/api/send", (req, res) => {
  const user = req.body;
  console.log(req.body);
  students.push(user);
  res.status(201).json(students);
});

app.listen(port, () =>
  console.log("server started on http://localhost:" + port)
);

// https://www.google.com/search?q=lion

// todo - crud

// 1yr tarined devloper
// id,title,description,dead_line, priority, isCompleted, date/time, isExtended, status,...

// create - post - add todo
// read - get - fetch todos, by id, title,description....
// update - put - todo update
// delete - delete - delete

// post man - devloper

//
