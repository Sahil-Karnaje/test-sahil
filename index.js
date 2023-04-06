const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT;

const home = fs.readFileSync("./index.html","utf-8");
const about = fs.readFileSync("./About.html","utf-8");
const contact = fs.readFileSync("./Contact.html","utf-8");

const server =  http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end(home);
    }else if(req.url==="/About"){
        res.end(about);
    }else if(req.url==="/Contact"){
        res.end(contact);
    }
});

server.listen(PORT,()=>{
    console.log('Server is working');
});