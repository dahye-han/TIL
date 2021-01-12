const btn = document.querySelector('button');

function random(number){
    return Math.floor(Math.random() * (number+1));
}

function bgChange(e) {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
    console.log(e);
}

// btn.onclick = bgChange;
// btn.addEventListener('click', bgChange);
// btn.addEventListener('click', function(){
//     const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     document.body.style.backgroundColor = rndCol;
// });

// btn.removeEventListener('click', bgChange);

// const buttons = document.querySelectorAll('button');

// for(let i=0; i<buttons.length; i++){
//     buttons[i].onclick = bgChange;
// }

const form = document.querySelector('form');
const fname = document.getElementById('fname');
const laname = document.getElementById('lname');
const para = document.querySelector('p');

form.onsubmit = function(e) {
    if(fname.value === '' || lname.value === ''){
        e.preventDefault();
        para.textContent = 'You need to fill in both names!';
    }
}