const fs = require("fs");

fs.writeFileSync("notes.txt", "Hello Node Js");
fs.writeFileSync("note.txt", "Hello Backend Developer");
// fs.writeFileSync(
//   "index.html",
//   "<html><head><title>FS Module</title></head></html>"
// );
// fs.writeFileSync("data.xls", "hello");

// log - message

// write in file

const data = fs.readFileSync("notes.txt", "utf8");
console.log(data);

// wap to use fs module, and create basic webpage of html.
