// 브라우저 내장 함수
// 몇몇 브라우저 내장함수는 브라우저 API의 일부
// 브라우저 내장 함수 = methods = objects 안에 정의된 function

// 사용자 저으이 함수(브라우저가 아닌 코드에 정의된 함수)

// 정의된 함수를 작동시키기 위해서 함수를 '호출'해야 함

// 익명 함수 = 스스로 할 수 있는게 없어서 주로 이벤트 핸들러와 사용
// myButton.onclick = function() {
//     alert(hello)
// }
// 변수 속에 익명 함수를 넣을 수 있음(헷갈릴수 있으니 지양)
// var myGreeting = function() {
//     alert('hello');
// }
// myGreeting();

// 이 방법을 지향
function myGreeting() {
    alert('hello');
}
myGreeting();

// 매개변수 : arguments, properties

// return value : 값을 반환하고 함수 끝


