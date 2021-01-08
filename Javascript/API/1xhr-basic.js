const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');

verseChoose.onchange = function() {
    const verse = verseChoose.value;
    updateDisplay(verse);
}

function updateDisplay(verse){
    verse = verse.replace(" ","");
    verse = verse.toLowerCase();
    let url = verse + '.txt';

    // let request = new XMLHttpRequest();
    // request.open('GET', url);
    // request.responseType = 'text';
    // //비동기 await
    // request.onload = function() {
    //     poemDisplay.textContent = request.response;
    // };
    // request.send();

    let myFetch = fetch(url);

    // myFetch.then(function(response){
    //     response.text().then(function(text){
    //         poemDisplay.textContent = text;
    //     });
    // });

    myFetch.then(function(response) {
        // 체인의 다음 링크로 결과를 전달하기 위해 return 을 포하해야 함
        return response.text();
    }).then(function(text){
        poemDisplay.textContent = text;
    });
}

updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';