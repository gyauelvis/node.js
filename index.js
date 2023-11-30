const path = require("node:path");
const os = require("node:os");
const fs = require("node:fs");
const EventEmitter = require("node:events");
const Logger = require('./logger')
const logger = new Logger();
logger.on('messageLogged',(args)=>console.log(args))
logger.log('message')


const http = require('node:http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write("Hello World");
        res.end()
    }else{
        res.write("Hiii");
        res.end();
    }
});

server.listen(3000);