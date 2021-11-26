// Fixed-size chunk of memory
// Array of integers, byte of data

const buf = Buffer.from('Hi');

console.log(buf); // unicode 로 출력
console.log(buf.length);
console.log(buf[0]); // ascii
console.log(buf[1]); // ascii

const buf2 = Buffer.alloc(2);

buf2[0] = 72;
buf2[1] = 105;
console.log(buf2);
console.log(buf2.toString());

const buf3 = Buffer.allocUnsafe(2);
// buf2.copy(buf3)
buf2.copy(buf3)
console.log(buf3);


// concat

const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
