// Лекція 3

'use strict';

let temp = '34';
console.log(typeof temp); // string

let temp2 = Number(temp);
console.log(typeof temp2); // number
console.log(temp2); // 34

let temp3 = 'dfg';
console.log(typeof temp3); //string

let temp4 = Number(temp3);
console.log(typeof temp4); //number
console.log(temp4); //Nan

let temp5 = 45;
console.log(temp5 % 4); //1

let temp6 = prompt('Age:', '45');
console.log(typeof temp6); // string
console.log(Number(temp6) + 10); // переведе зі string в number

// IF ELSE
let number1 = 0;
let number2 = '34';
if (!(number1 > -1)) {
  // оператор "!" перевертає значення у дужках з true на false та навпаки
  console.log('I`m here!');
} else {
  console.log('its not true!');
}

let age = prompt('How old are you?', 'Your answer'); //prompt завжди виводить str
age = Number(age); // конвертуємо prompt в number

// version 1: if () { if () {}}
if (typeof age == 'number' && String(age) != 'NaN') {
  // страховка від введення тексту при введені якого його видно як NaN, але NaN це і є 'number'
  if (age > 30) {
    console.log('Rest...');
  } else {
    console.log('Work!');
  }
} else {
  console.log('Please input number!');
}

// version 2: if () {} else if () {} else {}
if (age > 30) {
  console.log('1');
} else if (age > 10) {
  console.log('2');
} else {
  console.log('3');
}

// version 3
if (Number(age)) {
  console.log('1');
} else {
  console.log('2');
}

// hw
if (age % 2 == 0) {
  console.log('1');
} else {
  console.log('2');
}

// SWITCH CASE
let age2 = prompt('How old are you?', 'Your answer'); //prompt завжди виводить str
age2 = Number(age2); // конвертуємо prompt в number

switch (age2) {
  case age2 > 10:
    console.log('Bigger than 10');
    break;
  case age2 < 30:
    console.log('Smaller than 30');
    break;
  default:
    console.log('Something went wrong');
}

// Тернарний оператор
let age3 = prompt('How old are you?', 'Your answer'); //prompt завжди виводить str
age3 = Number(age3); // конвертуємо prompt в number

age3 === 10 ? console.log('10') : console.log('20'); // якщо треба щось перевірити швидко

//  ? - якщо так, то зробити або вивести...
//  : - (else) якщо ні, то...

age3 === 10
  ? console.log('10')
  : age > 10
  ? console.log('true')
  : console.log('error');
// але якщо багато умов краще не використовувати тернарний оператор

// SWITCH CASE
let age2 = prompt('How old are you?', 'Your answer'); //prompt завжди виводить str
age2 = Number(age2); // конвертуємо prompt в number

switch (age2) {
  case age2 > 10:
    console.log('Bigger than 10');
    break;
  case age2 < 30:
    console.log('Smaller than 30');
    break;
  default:
    console.log('Something went wrong');
}
