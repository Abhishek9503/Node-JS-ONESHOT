let cp=require("child_process")



// console.log("Trying to open calculator")
// cp.execSync("calc")
// console.log("Opened Calculator");


// console.log("Trying to open vd coder")
// cp.execSync("code")
// console.log("Opened vsCode");


// console.log("Trying to open Abhsihek Portfolio")
// cp.execSync("start https://abhishek17-portfolio.netlify.app/")
// console.log("Opened Abhishek Protfolio");



let output = cp.execSync("node abc.js")
console.log( "Output :" + output);