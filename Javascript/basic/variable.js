// 변수 : 숫자 또는 문자열과 같은 값의 컨테이너
// 포함된 값이 변경될 수 있음
// 문자열과 숫자 뿐 아니라 무엇이든 포함할 수 있음(함수도 포함)
// 배열 : [], 객체 : {}

const button = document.querySelector('button');

button.onclick = function() {
    let name = prompt('What is yout name?');
    alert(`Hello ${name}, nice to see you!`);
}

