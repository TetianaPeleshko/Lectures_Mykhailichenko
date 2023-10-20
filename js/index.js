// lecture 12

// 'use strict';

// файли .json
// let array = [
//   {
//     "name": 34,
//     "id": 45,
//     "friends": [34, 45, 65],
//   },
//   {
//     "name": 34,
//     "id": 45,
//     "friends": [34, 45, 65],
//   },
// ]; // по факту файл .json це строка

// console.log(JSON.parse(array)) //переведення в звичайний формат зі строки

// Налагодження коду (debugging) (ghrome dev tools, debugger, console.log)
function calculate(a, b) {
  // let result = a / b;
  // result *= 2;
  // return result; // неправильно, бо багато зайвих строк

  return (a + b) * 2; // ця строка заміняє три
}
// const x = 5;
// const y = 3;
// const z = calculate(x, y);
// console.log(z); // ці строки теж замінюємо

console.log(calculate(5, 3));

// Coding best practices (no global score usage / use strict / strict equal / airbnb coding style / each entity in different file)
// 1. ніяких глобальних змінних
// 2. використовувати use strict
// 3. завжди перевіряти змінні через === не тільки по значенню але і по типу даних (умовно забути про ==)
// 4. airbnb coding style
const arr = [
  [1, 1],
  [2, 4],
  [5, 6],
]; // масив в масиві краще писати в одну строку

const arr = [
  {
    id: 1,
    name: 'Ihor',
  },
  {
    id: 1,
    name: 'Ihor',
  },
]; // масив об'єктів

arr.map((item) => item * 3); //стрілочна функція, якщо операція одна можна записувати в строку без дужок, item можна не брати в дужки

// Базові практики рефакторінгу
