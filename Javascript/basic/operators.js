// 연산
// 자바스크립트는 실수와 정수 모두 Number 라는 하나의 데이터 타입만 사용

var btn = document.querySelector('button');
var txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
    if(btn.textContent === 'Start machine') {
        btn.textContent = 'Stop machine';
        txt.textContent = 'The machine has started!';
    } else {
        btn.textContent = 'Start machine';
        txt.textContent = 'The machine is stopped.';
    }
}