const pdfParser = require('pdf-parse');
const fsPromises = require('node:fs').promises

const pdfSrc = 'c:/Users/LENOVO/Downloads/Telegram Desktop/Atomic-Habits-old.pdf';

let readPdf = async(src) => await fsPromises.readFile(src);
let parsePdf = async(scr)=>{
    let data = await readPdf(scr);
    let content = await pdfParser(data);
    console.log(content.info)
}

parsePdf(pdfSrc)

