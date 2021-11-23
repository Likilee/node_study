console.log("logging......");
console.clear();

// log level 콘솔 로그로만 쓰지말고 레벨별로 잘 활용하면,
// 로그를 남길 때 info/warn/error를 레벨별로 로그 파일에 저장할건지, 출력할건지 등
console.log('log') // 개발
console.info('info') // 정보
console.warn('warn') // 경보
console.error('error') // 에러, 사용자 에러, 시스템 에러

// print object
const student = { name : "kilee", age: 31, company: {name: "42Seoul"} }

console.log(student);
console.table(student);
console.dir(student, {showHidden: false, depth: 0, colors: false});

// measuring time
console.time('for loop');
for(let i = 0; i < 100;) {
	++i;
}
console.timeLog('for loop');
console.timeEnd('for loop');

// Counting
function a() {
	console.count('a function');
}

a();
a();
console.countReset('a function');
a();

// Trace
function f1() {
	f2();
}

function f2() {
	f3();
}

function f3() {
	console.log("f3");
	console.trace();
}

f1();