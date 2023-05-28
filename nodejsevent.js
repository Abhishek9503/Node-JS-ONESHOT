const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("WaterFull", () => {
  console.log("Please turn off the motor");
  setTimeout(() => {
    console.log("Please turn off the motor! It is gentle remainder");
  }, 3000);
});

console.log("The script is running");
console.log("The script is Still running");

myEmitter.emit('WaterFull');
console.log("The script is still runnign");

// myEmitter.emit('event');
