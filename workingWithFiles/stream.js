const fs = require('node:fs');

const rs = fs.createReadStream('./newFile1.txt',{encoding:'utf8'})
const ws = fs.createWriteStream('./ws.txt');

// using listeners
// rs.on('data', (data)=> ws.write(data));

rs.pipe(ws)

