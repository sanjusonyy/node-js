const path = require("path");
// console.log(path.dirname("D:\C language\JS\map\path.js"));
// console.log(path.extname("D:\C language\JS\map\path.js"));
// console.log(path.basename("D:\C language\JS\map\path.js"));
// console.log(path.parse("D:\C language\JS\map\path.js"));

const mypath = path.parse("D:\C language\JS\map\path.js");
console.log(mypath.name);