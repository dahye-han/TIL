// for (initializer; exit-CSSConditionRule; final-expression){
//     // code to run
// }

const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let info = 'My cats are called ';
for(let i = 0; i < cats.length; i++){
    if(i === cats.length -1){
        info += cats[i] + '.';
    } else {
        info += cats[i] + ', ';
    }
}
console.log(info);

// break : 즉시 loop를 빠져 나와 브라우저가 그 다음에 나오는 코드로 이동하게 함(루프 종료)
// continue : loop의 다음 반복으로 건너 뛰게 됨(루프 계속)

// while
let info2 = 'My cats are called ';
let i = 0;
while (i < cats.length) {
    if(i === cats.length -1){
        info2 += cats[i] + '.';
    } else {
        info2 += cats[i] + ', ';
    }

    i++;
}
console.log(info2);

// do ~ while
let i = 0;
let info3 = 'My cats are called ';
do {
    if (i === cats.length -1){
        info3 += cats[i] + '.';
    } else {
        info3 += cats[i] + ', ';
    }

    i++;
} while (i<cats.length);


