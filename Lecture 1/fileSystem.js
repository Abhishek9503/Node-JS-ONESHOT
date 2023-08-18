//FileSystem
//File-> create, read ,update, delete
let fs = require("fs");

// let buffer = fs.readFileSync("abc.js"); // file content read krne k liuye
// console.log("Bin data  " + buffer);

//create   ---->  open append , writefile Synce
// fs.openSync("abc.txt", "w");

//no file=> create and file exist ->content replace
//create write
// fs.writeFileSync("abc.txt", "Hum aaj bhoht Khush h ");

//update
// fs.appendFileSync("abc.txt","Bhai kHush kyon nhi h");



// ---------------<    FOLDER KA KAM KRENGE AB APN  ------------------>

//creating folder

// fs.mkdirSync("meriDirectory");


//remve file in  a directory

// let content =fs.readdirSync("meriDirectory");
// console.log(content);
// for(let i=0; i < content.length; i++){
//     console.log("File", content[i] , "is removed")
//     fs.unlinkSync("meriDirectory/"+ content[i])     ///deleting file
// }

// removing folder
// fs.rmdirSync("meriDirectory");



// fs.existsSync->  if a file exist at a path then it return true if not then it return false
// let doesPathExits = fs.existsSync("abc.txt")
// console.log(doesPathExits);

//  doesPathExits = fs.existsSync("abcd.txt")
// console.log(doesPathExits);


// fs.lstatSynce -> It tell us tha path wheter the file is from folder or a file  Ye  jo path aa de rhe ho wo file ka he ya phir folder ka

let detailsObj= fs.lstatSync(__dirname + "\\fileSystem.js");
let ans = detailsObj.isFile();
console.log(ans);

ans=detailsObj.isDirectory();
console.log(ans);




//   +===============> REVISION <==========================


//File Directory
/*
create = open -w
read= readfileSynce
update = appendFile \
delete = unlink

*/

 //Folder Directory
/*
create mkdirSync
read = readdirSync
delte = rmdir



*/




// =============Path =============================


for(let i=1; i <=10 ;i++){
    let dirPathToMake= `Lecture-${i}`;
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(dirPathToMake + "\\" + "readme.md" , `# readme for ${dirPathToMake}`);
}