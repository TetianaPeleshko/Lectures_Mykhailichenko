// Lecture 17
'use strict';

// Object.defineProperty
const obj = {
  id: 12,
  name: 'Cat',
  gender: false,
};

// звертаємость доглобального об'єкту та беремо у нього фугкцію defineProperty
// 1. вказуємо об'єкт у якому будемо робити налаштування
// 2.другим параметром вказуємо поле в об'єкті в якому хочемо зробити якісь налаштування
Object.defineProperty(obj, 'id', {
  value: 13, // можемо вказати значення цього поля
  writable: false, // вказуємо, чи можно буде змінювати це значення у майбутньому
  enumerable: true, // вказує чи показувати цей id при переборі, наприклад при переборі ключів об'єктів за допомогою for in
  configurable: false, // каже чи можу я для цієї властивості же раз викликати цю функцію або ще раз їй щось змінювати
});

// ПЕРЕВІРКА: Чи є в об'єкті вказана властивість
// Option 1
console.log(obj['name']);

// Option 2 (з if можно працювати тільки якщо нема полів з булевим значенням)
if (obj['id']) {
  console.log('Exist');
} else {
  console.log('Does not exist');
}

// виводить не вірне значення, якшо працювати з булевим значенням
if (obj['gender']) {
  console.log('Exist');
} else {
  console.log('Does not exist'); // false (виведе, що такого ключа нема, хоча воно є)
}

// Option 3 - Object.hasOwnProperty()
// викликається на вказаному об'єкті з необхідним ключем в дужках
console.log(obj.hasOwnProperty('gender')); // true

// Option 4
console.log(Object.keys(obj));

// DATE
const dateNow = new Date();
console.log(dateNow); // сьогоднішня дата у повному форматі
console.log(dateNow.getFullYear()); // рік
console.log(dateNow.getDate()); // день місяця
console.log(dateNow.getHours()); // години

// як get так є і set
console.log(dateNow.setHours(21)); // виведе в мілісекундах

// Щоб не висати всі ці функцію, у функцію-конструктор можна передати свої значення дати
const dateNow1 = new Date(2023, 0, 14, 1, 1, 34); // рік, місяць, дата, години, хвилини, секунди
console.log(dateNow1); // виведе данні по вказаній даті

// Дата з серверу // формат ISO 8601
const dateNow2 = new Date('2022-01-15T12:30:00Z'); // T та 00Z - визначає таймзону
console.log(dateNow2);

// розділення слешами
const dateNow3 = new Date('2022/01/15');
console.log(dateNow3);

// PROMISE

console.log(2);

// в promise передаємо функцію (основну, після якої буде щось виконано)
let myPromise = new Promise(function () {
  setTimeout(() => {
    console.log(1);
  }, 3000);
}); // як тільки promise був ось так написаний, він вже працює і додатковий вивід не потрібен

console.log(myPromise); // вивед еодин з трьох станів promise: pending, fulfilled, rejected

// RESOLVE, REJECT
let myPromise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('user data'); // якщо все відпрацювало добре
  }, 3000);
});

let myPromise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject('user data failed'); // якщо прийшла помилка
  }, 3000);
});

// дані які прийдуть з сервера попадуть у функцію (resolve),щоб з ними працювати потрібні додаткові методи
// THEN -  - функція яка працює і зберігає в собі result (resolve або reject / все добре або помилка)
myPromise1.then((result) => {
  console.log(result);
});

// CATCH - функція яка працює з reject
myPromise1
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// щоб вивести стан в консоль
myPromise1
  .then((result) => {
    console.log(myPromise1);
  })
  .catch((error) => {
    console.log(myPromise1);
  })
  .finally(() => {
    console.log('1234567');
  });

// функції в глобальному Promise
let promise1 = Promise.resolve('Result1');
let promise2 = Promise.resolve('Result2');
let promise3 = Promise.reject('Result3'); // відразу задали та вивели

Promise.all([promise1, promise2, promise3]).then((results) => {
  console.log(results);
}); // спрацює тільки, якшо всі проміси в масиві будуть resolve

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
  })
  .catch((result) => {
    console.log(result);
  }); // виведе помилку (reject)
// приймає перераховуємий (наприклад, масив) об'єкт обіцянок і повертає нову обіцянку, яка виконується тільки тоді, коли всі передані обіцянки виконані успішно. Він повертає масив результатів у тому самому порядку, в якому були передані обіцянки.

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  console.log(results);
}); //  приймає перераховуємий (наприклад, масив) об'єкт обіцянок і повертає нову обіцянку. Основна особливість цього методу полягає в тому, що він чекає, поки всі обіцянки в переданому перераховуємому об'єкті будуть виконані або відхилені, і незалежно від того, які з них виконалися або були відхилені, повертає результат вигляді масиву об'єктів, де кожен об'єкт містить інформацію про статус виконання обіцянки та її результат або причину відхилення
