// // With a named function
// let myGreeting = setTimeout(function() {
//     alert('Hello, Mr. Universe!');
// },2000);

// //With a function defined separately
// function sayHi() {
//     alert('Hello~ Hello~');
// }

// let hellohello = setTimeout(sayHi,2000);

// // sayHi2의 대상이 되는 사람이름은 setTimeout()의 세번쨰 매개변수로 함수에 전달
// function sayHi2(who) {
//     alert('Hello ' + who + '!');
// }

// let myGreeting2 = setTimeout(sayHi2, 1500, 'JS');

// clearTimeout(myGreeting);

// //setInterval
// let timer = document.querySelector('p');

// function displayTime() {
//     let date = new Date();
//     let time = date.toLocaleString();
//     timer.textContent = time;
// }

// const createClock = setInterval(displayTime, 1000);

// clearInterval(createClock);

// requestAnimationFram
// function draw() {
//     //Drawing code goes here
//     requestAnimationFrame(draw);
// }

// draw();

// const spinner = document.querySelector('div');
// let rotateCount = 0;
// let startTime = null;
// let rAF;

// function draw(timestamp) {
//     if(!startTime) {
//      startTime = timestamp;
//     }

//     rotateCount = (timestamp - startTime) / 3;

//     if(rotateCount > 359){
//         rotateCount %= 360;
//     }

//     spinner.style.transform = 'rotate(' + rotateCount + 'deg)';

//     rAF = requestAnimationFrame(draw);
// }

// draw()

// cancelAnimationFrame(rAF);