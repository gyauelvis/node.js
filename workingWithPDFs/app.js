import { getDocument } from "pdfjs-dist";
import path from "node:path";
import fsPromises from "node:fs/promises"

let getContent = async(src)=>{
    let data = await getDocument(src).promise;
    let pdfInfo = {
        numberOfPages: await data._pdfInfo.numPages
    }
    console.log(pdfInfo);
}

let getItems = async(src)=>{
    let content = await getContent(src);
    const items = content.items.forEach(item => console.log(item.str))
    return items;
}


getContent("/Users/LENOVO/Downloads/Telegram Desktop/Atomic-Habits-old.pdf")



process.on('uncaughtException',(err)=>console.log(`uncaughtException:${err}`));