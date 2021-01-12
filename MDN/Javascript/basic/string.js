// 문자열의 마지막 문자 구하기
var browserType = 'mozilla';
console.log(browserType.length);
console.log(browserType[0]);
console.log(browserType[browserType.length-1]);

// 문자열 내에 하위 문자열 찾기
console.log(browserType.indexOf('mozilla'));
console.log(browserType.indexOf('vozilla'));

// 문자열 내에 일치하는 하위 문자열이 있을때
if(browserType.indexOf('mozilla') != -1){
    console.log("indexof not -1");
}

// 대/소문자 변경
var reqData = 'My NaMe is MuD';
console.log(reqData.toUpperCase());
console.log(reqData.toLowerCase());

// 문자열의 일부를 변경 (임시)
console.log(browserType.replace('moz', 'van'));
console.log(browserType);

