// Node 에서 글로벌 객체는 'global'이다.

//글로벌 객체 안에 멤버 추가할 수도 있구!, global을 빼고 해봐도 동일하게 동작한다.
global.hello = () => {
	console.log("Hello World!");
	//우리가 그냥 막 쓰던 애들은 global의 맴버들이라고 보면된다.
	global.console.log("hello World!");
}

global.hello();
hello();