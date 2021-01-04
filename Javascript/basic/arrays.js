// 문자열을 배열로, 배열을 문자열로 변환
var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';

var myArray = myData.split(',');
console.log(myArray);

var myNewString = myArray.join(',');
console.log(myNewString);

// toString은 매개변수가 필요 없음
var dogNames = ['Rocket', 'Flash', 'Bella', 'Slugger'];
console.log(dogNames.toString());

// 배열에 item을 추가하고 제거하기
myArray.push('Cardiff');
console.log(myArray);
myArray.push('Bradford', 'Brighton');
console.log(myArray);

var newLength = myArray.push('Bristol');
console.log(myArray);
console.log(newLength);

myArray.pop();

var removedItem = myArray.pop();
console.log(myArray);
console.log(removedItem);

myArray.unshift('Edinburgh');
console.log(myArray);

var removedItem = myArray.shift();
console.log(myArray);
console.log(removedItem);