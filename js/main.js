const field = document.getElementById('field');
const start = document.getElementById('start');
const retry = document.getElementById('retry');
const modal = document.getElementById('modal');

let randomPoint;
let cells = document.querySelectorAll('td');
const removeHidden = () => {
   field.classList.remove('hidden');
}

const startFunc = () => {
 randomPoint = Math.floor(Math.random() * 300);
 const rndm = Math.floor(Math.random() * 3);

 let notTwo;

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
}



start.addEventListener('click', startFunc);
retry.addEventListener('click', retryFunc);