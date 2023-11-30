const fsPromises =  require('node:fs').promises;
const path = require('node:path');
console.log(path.parse(`${__filename}/workingWithPDFs/index.js`))
let createFile = async()=>{
    try{
        await fsPromises.writeFile(`${__dirname}/workingWithPDFs/index.js`,'')
    }catch(err){
        console.log(err)
    }
}

createFile();
