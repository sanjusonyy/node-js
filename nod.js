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

const http = require('http');

http.createServer((req,resp)=>{
    resp.write("<h1>hello this is sanjeev</h1>");
    resp.end();
    
}).listen(4500);


