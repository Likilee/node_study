let num = 1;

const interval = setInterval(()=>{
	console.log(num++)
},100);
console.time("start");
setTimeout(() => {
	clearInterval(interval);
}, 6000)


console.log("code1");
setTimeout(() => {
	console.log("setTimeout 0")
}, 0);

console.log("code2");
setImmediate(() => {
	console.log("setImmediate")
});

console.log("code3");
process.nextTick(() => {
	console.timeEnd("start");
	console.log("process.nextTick()")
})

for(let i =0; i< 2000000000; ++i){}