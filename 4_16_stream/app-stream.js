const fs = require('fs');

const readStream = fs.createReadStream('./file.txt', {
	highWaterMark: 24,
	encoding: 'utf-8',
});

const data = [];
readStream.once('data', chunk => {
	data.push(chunk);
	console.count('data');
}).on('error', error => {
	console.error(error);
}).on('end', () => {
	console.log(data.join());
})
