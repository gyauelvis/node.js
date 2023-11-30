const fsPromises =  require('node:fs').promises;
const path = require('node:path');

console.log(__dirname)
let createFile = async()=>{
    try{
        await fsPromises.writeFile(`${__dirname}/workingWithPDFs/index.js`)
    }catch(err){
        console.log(err)
    }
}
