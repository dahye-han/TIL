// if(condition){
//     code to run if condition is true
// } else {
//     run some other code instead
// }

let shopppingDone = false;
let childsAllowance;
if(shopppingDone === true){
    childsAllowance = 10;
} else {
    childsAllowance = 5;
}
console.log(childsAllowance);

// false, undefined, null, 0, NaN, '' => false
let cheese = null;

if(cheese) {
    console.log('true');
} else {
    console.log('false');
}

// switch (expression){
//     case choice1:
//         run this code 
//         break;
    
//     case choice2:
//         run this code instead
//         break;
    
//     default:
//         actually, just run this code 
// }

// Ternary operator
// (condition) ? run this code : run this code instead

let isBirthday = false;
let greeting = ( isBirthday ) ? 'Happy Birthday' : 'Good morning';
console.log(greeting);