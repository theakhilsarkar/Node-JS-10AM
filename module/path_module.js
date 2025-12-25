const path = require("path");

// path
// window - path : d:\Akhil\Node-JS-10AM\module
// backslash

console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.join(__dirname, "public", "index.html"));
