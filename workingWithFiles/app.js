const fsPromises = require("node:fs").promises;
const { exit } = require("node:process");

const fileOps = async()=>{
    try{
        const data = await fsPromises.readFile("/Users/LENOVO/Downloads/Resumev1.pdf", 'utf8');
        await fsPromises.writeFile(`${__dirname}/newFile.txt`, data);
        await fsPromises.appendFile(`${__dirname}/newFile.txt`, "\n How are you?");
        await fsPromises.rename(`${__dirname}/newFile.txt`,`${__dirname}/newFile1.txt`)
    }catch(err){
        throw new err;
    }
}

fileOps();

// fs.readFile("/Users/LENOVO/Downloads/Resumev1.pdf", (err, file) => {
//   if (err) throw err;
//   console.log(file);
// });

// fs.writeFile(`${__dirname}/newFile.txt`, "Nice to meet you", (err) => {
//   if (err) throw err;

//   fs.appendFile(`${__dirname}/newFile.txt`, "\nHow are you man?", (err) => {
//     if (err) throw err;

//     fs.rename(
//       `${__dirname}/newFile.txt`,
//       `${__dirname}/newFile1.txt`,
//       (err) => {
//         if (err) throw err;
//       }
//     );
//   });
// });

// exit on unCaughtException

process.on("uncaughtException", (err) => {
  console.log(`unCaughtException: ${err}`);
  exit(1);
});
