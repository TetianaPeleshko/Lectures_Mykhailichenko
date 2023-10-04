// // FUNCTION

// // function replace typing the same things multiple times
// function func(number) {
//   for (let i = 0; i <= number; i++) {
//     if (number % i === 0) {
//       console.log(i);
//     }
//   }
// }

// let number1 = +prompt('First number:', '0');
// func(number1);

// let number2 = +prompt('Second number:', '0');

// // function + return
// function func1(number) {
//   let numberAdd = number + 2;
//   return numberAdd;
// }
// // для збереження того, що поверне функція створюємо нову змінну і припівнюємо те що поверне функція
// let numberResult = func1(number2);
// console.log(numberResult);

// // фунція може просто щось виводити
// function func2() {
//   console.log('String');
// }
// func2();

// //стрілочна функція, сама по собі існувати не може, тому оголошують зміну куди її запихують
// () => {};
// let func3 = () => {
//   console.log('String');
// };

// func3();

// // ARRAYS
// // оголошення масива
// let arr = [];
// // arr. ... для додавання чогось у масив використовують вбудовані функції
// arr.push(1); // додає значення у кінець масиву
// arr.push(2);
// console.log(arr);

// // заміна конкретного індексу
// arr[0] = 5;
// console.log(arr);

// // виведення конкретного елементу по інддексу
// console.log(arr[1]);

// // довжина масиву
// console.log(arr.length);

// // вивести всі елементи масиву і додати до кожного з них 2, але є спеціяльний метод
// let arr2 = [2, 3, 4, 5];

// for (let i = 0; i < arr2.length; i++) {
//   console.log(arr2[i] + 2);
// }

// // .map створює новий масив в якому кожен елемент обчислюється на базі того, що прий шло з масива
// // виводить новий масив
// let arr3 = [2, 3, 4, 5, 6, 7];
// let arrAfterMap = arr3.map((item) => {
//   return item + 2;
// });
// console.log(arrAfterMap);

// // .filter відфільтровує дані, повертає новий масив, але тільки по якійсь умові

// let arr4 = [2, 3, 4, 5];
// let arrAfterFunc = arr4.filter((item) => {
//   return item % 2 === 0;
// });
// console.log(arrAfterFunc); // поверне масив де будуть тільки парні числа

// // .forEach нічого не повертає, але проходиться по елементам у масиві і щось з ними робить, кореневий масив не змінює
// let arr5 = [2, 3, 4];
// arr5.forEach((item) => {
//   console.log(item);
// });

// // .reduce зменшує масив до якогось одного значення проходячись по всім елементам і щось з ними зробить
// // Приклад: знайти сумму всіх елементів у масиві
// let arr6 = [2, 3, 4, 7];
// let arrAfterReduce = arr6.reduce((accumulator, item) => {
//   return accumulator + item;
//   // accumulator - змінна яка збирає результат сумування всіх елементів
// }, 0); // 0 - це початкове значення
// console.log(arrAfterReduce);

// // .pop() Видаляє останній елемент з масиву, а також вміє повертати його
// let arr7 = [2, 3, 4, 7, 8, 9];
// let lustNumber = arr7.pop();

// console.log(arr7);
// console.log(lustNumber); // виведете, що було видалене

// // .shift() Видаляє перший елемент з масиву
// let arr8 = [2, 3, 4, 7, 8, 9];
// let firstNumber = arr8.shift();

// console.log(arr8);
// console.log(firstNumber);

// // .splice видаляє елементи з масиву за індексом та вставляє елементи в масив за індексом
// let arr9 = [2, 3, 4, 7, 8, 9];
// let numberByIdex = arr9.splice(2, 3, 7, 7, 7);
// // перше значення: індекс з якого починати, другий: скільки елементів видалити, 3, 4 та 5 - Числа вставлені на заміну видаленим
// console.log(arr9);

// // .splice не видаляє елементи з масиву, але на місто вказаного індексу вставляє нове значення
// let arr10 = [2, 3, 4, 5, 6, 7];
// let numberAddByIdex = arr10.splice(2, 0, 7);
// console.log(arr10); // [2, 3, 7, 4, 5, 6, 7]

// // який індекс елемента
// // indexOf - до неї передається значення
// console.log(arr10.indexOf(5)); // 4
// // якщо елементів буде декілька, то виведе перше знайдене і зупинеться
// // якщо заданного ЕЛЕМЕНТА НЕМА, ТО ВИВЕДЕ -1

// // .find() повертає перший знайдений елемент працюючи з функцією, можна задавати умову за якої буде повернутий item
// let arr11 = [1, 8, 4, 5, 6, 7];
// let element = arr11.find((item) => {
//   return item % 2 === 0;
// });
// console.log(element);

// // .sort() - бере a і b та порівнює між собою, перебираючи весь масив
// // використовуєтьяс для сортування елементів масиву
// let numbers = [4, 2, 5, 1, 3];

// // Сортування без compareFunction
// numbers.sort();
// console.log(numbers); // [1, 2, 3, 4, 5]

// // Сортування з compareFunction (у порядку спадання)
// numbers.sort(function (a, b) {
//   return b - a;
// });
// console.log(numbers); // [5, 4, 3, 2, 1]

// let arr12 = [1, 5, 6, 9, 2, 0, 10];

// arr12.sort();
// // console.log(arr12); // [0, 1, 10, 2, 5, 6, 9] де 10 не на своєму місці
// arr12.sort(function (a, b) {
//   return a - b;
// }); // arr12.sort((a, b) => a-b); // скорочений запис через стрілкову функцію
// console.log(arr12); //  [0, 1, 2, 5, 6, 9, 10] !!! вірний вивід

// let arr13 = [1, 5, 6, 9, 2, 0, 10];
// arr13.sort(function (a, b) {
//   return b - a;
// });
// console.log(arr13); // [10, 9, 6, 5, 2, 1, 0] зворотній вивід

// // HW
// let arrLength = +prompt('Enter array length:', '7');
// let arr = [];

// for (let i = 0; i < arrLength; i++) {
//   let arrElements = +prompt('Enter elements:', '0');
//   arr.push(arrElements);
// }
// console.log(arr);

// Знайти найбільший серед елементів масиву, ост альні обнулити.
let arr2 = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];
let number = 0; // для порівння

// переписати через forEach
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > number) {
    number = arr2[i]; // Записуємо елемент і виведе один елемент - найбільший
    // так как пройде по всім елементам і порівняє іх між собой, постійно перезаписуючи найбільше в number
  }
}
let foundIndex = arr2.indexOf(number);
console.log(number);
console.log(foundIndex);

for (let i = 0; i < arr2.length; i++) {
  if (i != foundIndex) {
    arr2[i] = 0;
  }
}
console.log(arr2);
