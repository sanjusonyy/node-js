const fs = require("fs");
// var fs = require('fs');

// A common use for the File System module:

// Read files
// Create files
// Update files
// Rename files
// fs.writeFileSync("read.txt","welcome to sanjeev node js");

// fs.writeFileSync("read.txt","janeman sanjha kro . welcome to sanjeev node js");
// fs.appendFileSync("read.txt","rinka samjha kro...")
// const abc = fs.readFileSync("read.txt");
// org_data = abc.toString();
// console.log(org_data);
// buffer is mainly used to to store binary data
/* <Buffer 6a 61 6e 65 6d 61 6e 20 73 61 6e 6a 68 61 20 6b 72 6f 20 2e 20 77 65 6c 63 6f 6d 65 20 74 6f 20 
73 61 6e 6a 65 65 76 20 6e 6f 64 65 20 6a 73 20 72 69 ... 17 more bytes> */

// to rename the file----->

// fs.renameSync("read.txt","readwrite.txt");
//  to create folder-------->
// fs.mkdirSync("sanjeev");

// fs.writeFileSync('bio.txt',"my name is sanjeev kumar");
// fs.writeFileSync('sanjeev/bio.txt',"my name is sanjeev kumar");
// fs.appendFileSync("sanjeev/bio.txt"," sanjeev this side call me sanjeev");
// const xyz = fs.readFileSync("sanjeev/bio.txt");
// const xyz = fs.readFileSync("sanjeev/bio.txt","utf8");
// console.log(xyz);

// fs.renameSync("sanjeev/bio.txt","sanjeev/mybio.txt");
// to delete the file------>
// fs.unlinkSync("sanjeev/mybio.txt");
// to delete the folder------>
// fs.rmdirSync("sanjeev");

// file system using asynchronous --------->
// we need to use callback function in async------>
// fs.writeFile("bio.txt","hello this is me sanjeev kumar, i love my country",(err)=>{
//     console.log("file cretated");
//     console.log(err);
// })

//difference between asynchronous and synchronous------>
// const data = fs.readFileSync('bio.txt',"utf8");
// console.log(data);
fs.readFile("bio.txt","utf8",(err, data)=>{
    console.log(data);
})
console.log("hello");









