// this in function
function hello() {
	console.log("===== In function ====")
	console.log(this);
	console.log(this === global);
}

hello();

//this in class
class A {
	number;

	constructor(number) {
		this.number = number;
	}

	thisInClass() {
		console.log("===== In Class ====")
		console.log(this);
		console.log(this === global);
	}
}

const a = new A();
a.thisInClass();

// this in Global
console.log("===== In Global Scope ====")
console.log(this);
console.log(this === global);
console.log(this === module.exports);