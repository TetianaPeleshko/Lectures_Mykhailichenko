// From lecture 6
// DEEP COPY by ASSIGN
const user = {
  name: 'Ihor',
  surname: 'Mykh',
  date: {
    id: 23,
    age: 25,
  },
};

const userCopy = {};
for (let item in user) {
  if (typeof user[item] === 'object') {
    userCopy[item] = Object.assign({}, user[item]);
  } else {
    userCopy[item] = user[item];
  }
}

user.date.id = 4;
console.log(userCopy);

// Lecture 7
// RECURSION
// Факторіал 5! = 1 * 2 * 3 * 4 * 5
console.log(func(5));

function func(number) {
  if (number === 0) {
    return 1;
  } else {
    return number * func(number - 1);
  }
}

// ФУНКЦІЯ, ЩО ЗАМИКАЄТЬЧЯ IIFE (Immediately Invoked Function Expression)
// option 1
(function func1() {
  console.log(1);
})();

// option 2
let x = (function func2() {
  return 2;
})();
console.log(x);

// // ЗАМИКАННЯ
function countManipulation() {
  let count = 0; // Заводимо лічильник

  // нам треба кожен раз, коли ми викликаємо функцію countIncrement збільшувати лічильник
  function countIncrement() {
    count++;
    console.log(count);
  }
  return countIncrement;
}

let newFunc = countManipulation();
newFunc();
newFunc();
newFunc();
newFunc();

// Math. ...
// отримання рандомного числа
console.log(Math.random()); // поверне рандомне число від 0 до 1
console.log(Math.random() * 10); // поверне рандомне число від 0 до 10

let num = 123.623672;
console.log(Math.round(num)); //округляє число до більшого числа
console.log(Math.floor(num)); // відсікає дрібну частину

// toFixed округлює до вказаної кількості знаків після коми за правилами математики
console.log(num.toFixed(4));

// string
// split, join
let name = 'vdyicvgewjndcio';
console.log(name[4]); // виводить конкретий елемент за індексом
console.log(name.split('')); // розбиває рядок на масив рядків, шляхом поділу зазначеним підрядком('', ' ', або будь який інший знак)
console.log(name.split('').join('')); // поєднує всі елементи масиву у рядок (спочатку поділили, а потім об'єєднали)
console.log(name.split('').join(',')); // поєднує всі елементи масиву у рядок, але виведе кожен елемент через кому

let str = 'vdyicvgewjndcio';

let arr = str.split(''); // розбиває рядок на масив рядків, шляхом поділу зазначеним підрядком
console.log(arr);

let newString = arr.join(','); // поєднує всі елементи масиву у рядок, але виведе кожен елемент через кому
console.log(newString);

// replace, parseInt, parseFloat (привести рядок с зайвими знаками до чистого числа)
let cost = '$156778,365';
console.log(cost.replace('$', '')); // заміщує якись елементи в рядку на вказані, перший аргумент -  це, що замінити, другий - на що
console.log(cost.replace(',', '.')); // заміна коми на крапку
let costWhithoutSymbols = cost.replace('$', '').replace(',', '.'); // об'єднаний варіант
console.log(parseInt(costWhithoutSymbols)); //приводе рядок у число, але тільки у ціле число відкидаючи дробову частину
console.log(parseFloat(costWhithoutSymbols)); //приводе рядок у число, зберігає дробову частину

// slice (повертає новий масив, який копіює елементи, починаючи з індексу start і до end (не включаючи end))
let costWhithoutSymbols2 = cost.slice(1); // видалить перший знак(знак долара), тобто нульовий індекс, а с першого і далв все виведе
console.log(costWhithoutSymbols2);

let cost2 = '$156778,365';
let costWhithoutSymbols3 = cost2.slice(2, 4); // виведе з другого індекса по четвертий
console.log(costWhithoutSymbols3);

let costWhithoutSymbols4 = cost2.slice(-4); // залишає елементи починаючі з кінця, інші видаляє
console.log(costWhithoutSymbols4);

// HW
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
  let key = '';
  let index = Math.round(Math.random() * 10); // округлюємо та додаємо до key випадковий символ з надоного набору key (16 разів)
  console.log(index); // номер індекса з characters
  // додати цикл
  key += characters[index]; // перебираємо доки не буде 16 index в key

  return key;
}

const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i
