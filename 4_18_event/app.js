const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('ellie', (args) => {
	console.log("first callback -", args);
})

const callback2 = (args) => {
	console.log("second callback -", args);
}
emitter.on('ellie', callback2);
emitter.emit('ellie', {message : 1});
emitter.emit('ellie', {message : 2});
emitter.removeListener('ellie', callback2);
emitter.emit('ellie', {message : 3});