const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./file.txt');
const writeStream = fs.createWriteStream('./file4.zip');
const zlibStream = zlib.createGzip();

const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on('finish', ()=> {
	console.log('done!');
})