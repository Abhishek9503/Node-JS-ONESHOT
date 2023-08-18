const os = require("os");

console.log(os.freemem());

console.log(os.homedir());

console.log(os.hostname());
console.log(os.platform());

console.log(os.release());
console.log(os.uptime());
console.log(os.machine());
console.log(os.type());


let chalk = require("chalk")
console.log(chalk.blue("Hello WOrld"));