const fs = require("fs");
console.log("readdirSync(process.cwd()): ", fs.readdirSync(process.cwd()));
console.log("readdirSync('.'):", fs.readdirSync("."));
