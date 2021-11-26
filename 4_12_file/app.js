const fs = require('fs');

// 3 가지 방법
// rename(...., callback(error, data))
// try {renameSync(....)} catch(e) {} // 안쓰는게 좋음
// promises.rename().then().catch(0)


try {
	fs.renameSync('./test.txt', "./test-new.txt");
}
catch (error) {
	console.error(error);
}

fs.rename('./test-new.txt', './test.txt', (error) => {
	console.log(error);
})
console.log('hello');

fs.promises
	.rename('./test.txt', './test-new.txt')
	.then(()=>{console.log("Done!")})
	.catch(console.error)