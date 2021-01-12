// JSON : javascript object notation
// 구조화된 데이터를 표현하기 위한 문자 기반의 표준 포맷
// 웹 어플리케이션에서 데이터를 전송할 때 일반적으로 사용
// JSON은 문자열 형태로 존재
// Parsing : 문자열에서 네이티브 객체로 변환
// 문자열화 : 네트워크를 통해 전달할 수 있게 객체를 문자열로 변환하는 과정
// 개별 JSON 객체는 .json 확장자를 가진 단순 텍스트 파일에 저장할 수 있음
// MIME 타입은 application/json

// JSON은 순수히 데이터 포맷, 오직 프로퍼티만 담을 수 있고 메서드는 담을 수 없음
// JSOM은 문자열과 프로퍼티의 이름 작성시 큰 따옴표만을 사용해야 함(작은 따옴표는 사용 불가)
// JSONLint 같은 어플리케이션을 사용해 JSON 유효성 검사를 할 수 있음
// 따옴표로 묶인 문자열만이 프로퍼티로 사용될 수 잇음

const header = document.querySelector('header');
const section = document.querySelector('section');
var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function() {
    var superHeroesText = request.response;
    var superHeroes = JSON.parse(superHeroesText);
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}

var myJSON = { "name": "Chris", "age": "38"};
console.log(myJSON);
var myString = JSON.stringify(myJSON);
console.log(myString);

function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);

    var myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
}

function showHeroes(jsonObj) {
    var heroes = jsonObj['members'];

    for (var i=0; i < heroes.length; i++){
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');

        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'Superpowers:';

        var superPowers = heroes[i].powers;
        for (var j = 0; j < superPowers.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}

