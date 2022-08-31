const http = require("http"); //
const url = require("url");
const fs = require("fs")
const server = http.createServer((req,res)=>{ //creating our own server
//    http request and routing----->
    if(req.url =="/"){
    res.end("hello this is sanjeev");
    }
    else if(req.url =="/about"){
    res.end("hello this is about of sanjeev");
    }
    else if(req.url =="/contact"){
        res.write("hello this is contact of sanjeev")
        res.end("hello this is contact of sanjeev");
        }
        else if(req.url =="/userapi"){
           fs.readFile(`${__dirname}/apijson/userapi.json`,
           "utf-8", (err, data)=>{
            console.log(data);
           })
            res.end("hello this is contact of sanjeev");
        }
        else{
            res.writeHead(404, {"Content-type": "text/html"});
            res.end("<h1> 404 page not found </h1>");
        }
    // res.end("hello this is sanjeev");
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8080")
});
