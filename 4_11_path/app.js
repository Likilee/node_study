const path = require('path');


// POSIX ( Unix: Mac, Linux): 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'
// 운영체제 별로 path 표시가 달라지기 때문에 하드코딩 X
console.log(__dirname);
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);

//basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

//dirname
console.log(path.dirname(__filename));

//estension
console.log(path.extname(__filename));

//parse
const parsed = path.parse(__filename);
console.log(parsed);
console.log(parsed.root);
console.log(parsed.name);

const str = path.format(parsed);
console.log(str);

//isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname));
console.log('isAbsolute?', path.isAbsolute("../"));

//normalize
console.log(path.normalize('./folder//////hey'));

//join
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname,'image'));