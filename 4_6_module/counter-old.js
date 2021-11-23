let count = 0;

function increase() {
	++count;
}

function getCount() {
	return count;
}

// es6 이전에 export, import 기능이 없을 때 node가 자체적으로 만든 모듈 기능
// module.exports , require
module.exports.getCount = getCount;
module.exports.increase = increase;