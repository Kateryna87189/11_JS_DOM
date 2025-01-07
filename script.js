console.log(document.body);
//для домашки ці 2 і інструменти позішн
const div1 = document.getElementById('div1');
div1.style.border = '1px solid black';

const div1Query = document.querySelector('#div1');//for 1 id

const pDiv1 = document.querySelectorAll('#div1 > p');//for all elements

for (const i in pDiv1) {
    pDiv1[i].innerHTML = `
    <span>New text ${+i+1}</span>
    `;
}

const newP = document.createElement('p');
newP.textContent = 'Даний елемент був створений в файлі script.js';
div1.appendChild(newP);

//HOMEWORK
/* let x = 0;
let y = 0;
let directionX = 1;
let directionY = 1; */

const t = setInterval(move, 30);//кожні 20 мілісекунд буде запускатись move
//const container = document.getElementById('container');
const box = document.getElementById('box');

let pos = 0;//new2 NEW 
let flag = true;//new 2

let step = 1//new 3          РІШЕННЯ ДО ДРУГОГО ЗАВДАННЯ

function move(){//new 3      РІШЕННЯ ДО ДРУГОГО ЗАВДАННЯ
pos += step;//pos = pos+step
if (pos===0 || pos === 150) {
  step *= -1;//step = step * -1
}
box.style.left =  `${pos}px`; //pos + "px"
box.style.top = `${pos}px`;
}

        //new 2 РІШЕННЯ ДО ДРУГОГО ЗАВДАННЯ
//  function move() {//коли прапор зміниться
// /* if(pos === 150){
//   flag = false;
// }
// if(pos === 0){
//   flag = true;
// } */
//   // if(flag){ //на основі значення прапора зміна позиції елемента
//   //   pos++;
//   //   }else{
//   //   pos--;
//   //   }
// flag ? pos ++ :pos--;

// if (pos === 0 || pos === 150) {
//   flag = !flag;
// }


// box.style.top =  `${pos}px`; //зміна свойств
// box.style.left = `${pos}px`;

//  }


// function move() {
//   // x += directionX; 
//   // y += directionY;
//    pos++;//змінюєм позицію                              NEW РІШЕННЯ ДО ПЕРШОГО ЗАВДАННЯ
//    box.style.left =  `${pos}px`; //pos + "px"           NEW РІШЕННЯ ДО ПЕРШОГО ЗАВДАННЯ
//    box.style.top = `${pos}px`;                          NEW РІШЕННЯ ДО ПЕРШОГО ЗАВДАННЯ

//    if(pos ===150){                    NEW РІШЕННЯ ДО ПЕРШОГО ЗАВДАННЯ
//     clearInterval(t);                 NEW РІШЕННЯ ДО ПЕРШОГО ЗАВДАННЯ
//    }


//   /* if (x >= container.clientWidth - box.offsetWidth) {
//     directionX = -1;
//   }else if(y >= container.clientHeight - box.offsetHeight){
//     directionY = -1;
//   }else if (x<= 0){
//     directionX = 1;
//   }else if(y<=1){
//     directionY = 1;
//   } */
// }
//const t = setInterval(move, 20);//кожні 20 мілісекунд буде запускатись move
//setTimeout(() => clearInterval(t), 10000);

 //TODO
    //BASEd Level
  // відобразити щоб червоний квадрат рухався по діагоналі вниз і зупинитись в правому нижньому куті по 1 рх
    //ADvanced Level
    //зробити так щоб червоний квадрат повернувся назад в лівий верхній (щоб повторював цю дію )
//clearInterval(t); зупинити запуск