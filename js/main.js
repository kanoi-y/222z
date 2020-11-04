// 定数、変数定義

const field = document.getElementById('field');
const start = document.getElementById('start');
const retry = document.getElementById('retry');
const modal = document.getElementById('modal');
const success = document.getElementById('successTime');
const name = document.getElementById('correctName');

let randomPoint;
let startTime;
let notTwo;
let cells = document.querySelectorAll('td');

// 関数定義

const removeHidden = () => {
   field.classList.remove('hidden');
}

const startFunc = () => {
const rndm = Math.floor(Math.random() * 3);
startTime = new Date();

randomPoint = Math.floor(Math.random() * 300);


 if (rndm === 0) {
     notTwo = 'Z'
 } else if(rndm === 1) {
     notTwo = 'て';
     cells[randomPoint].classList.add('teCss');

 } else if(rndm === 2) {
     notTwo = 'ユ'
     cells[randomPoint].classList.add('yuCss');
 }
 field.classList.add('hidden');
 setTimeout(removeHidden, 800);
 cells[randomPoint].innerText = `${notTwo}`;
start.classList.add('hidden');
retry.classList.remove('hidden');

cells[randomPoint].addEventListener('click', answer);
};

const retryFunc = () => {
   if (cells[randomPoint].innerText === 'て') {
    cells[randomPoint].classList.remove('teCss');
   } else if(cells[randomPoint].innerText === 'ユ') {
    cells[randomPoint].classList.remove('yuCss');
   }

   for (let i = 0; i < cells.length; i++) {
     cells[i].innerText = '2';
   }

   modal.classList.add('hidden');


    startFunc();
}

const answer = () => {
    modal.classList.remove('hidden');
    const finishTime = new Date();
    let successTime = finishTime - startTime;
    const min = Math.floor(successTime / 60000) === 0 ? '00' : Math.floor(successTime / 60000);
    successTime = successTime % 60000;
    const sec = Math.floor(successTime / 1000);
    successTime = successTime % 1000;
    const ms = successTime;
    success.textContent = `${min}:${sec < 10 ? '0' : ''}${sec}.${ms}`;
    
    if (notTwo === 'Z') {
      name.textContent = 'アルファベットのZ';
    } else if (notTwo === 'て') {
      name.textContent = '「て」をひっくり返したヤツ';
    } else if (notTwo === 'ユ') {
      name.textContent = 'カタカナのユ';
    }
}

// イベント定義

start.addEventListener('click', startFunc);
retry.addEventListener('click', retryFunc);