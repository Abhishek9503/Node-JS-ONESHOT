const fs = require("fs");

// fs.readFile("file.txt", "utf8", (err, data) => {
//   console.log(err, data);
// });

// const a = fs.readFileSync("file.txt");  //intentionally funciton ko phle dikhane k liye
// console.log(a.toString());

// console.log("Finished readiing");

// fs.writeFile("file2.txt", "this is a given  data", () => {
//   console.log("Written to the file");
// });

const b = fs.writeFileSync("file2.txt", "This is sync Data 2");
console.log(b);

console.log("Finished reading file");
