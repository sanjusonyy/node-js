// Core module---->

// const call = require('./call')
// console.log(call)
// const fs = require('fs');
// fs.writeFileSync("hello.txt", "this is for trial");
// console.log("->>",__filename);
// const fs = require('fs');
// fs.writeFileSync("code.txt", "hello this is me");
// const fs = require('fs').writeFileSync;
// fs("abc.txt","hello i am sanjeev");

// const http = require('http');

// http.createServer((req,resp)=>{
//     resp.write("<h1>hello this is sanjeev</h1>");
//     resp.end();

// }).listen(4500);

// console.log("hello this is sanjeev");

// const http = require('http');
// const data = require('./data');
// http.createServer((req, resp) => {
//     resp.writeHead(201, { 'Content-Type': 'application\json' });
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(6000);

// var http = require('http');
// var dt = require('./myfirstmodule');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time are currently: " + dt.myDateTime());
//   res.end();
// }).listen(8080);

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
