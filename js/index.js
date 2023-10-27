// Lecture 15 Asynchronous Code Execution,Working With Data Structures

// EventLoop

//
//
// Map - пара: ключ-значення, де клю унікальний. Ключем можно зробити рядок. число, об'єкт і т.д.
let myMap = new Map(); // створення Map

// запис даних в Map за допомогою функції set()
myMap.set('key1', 'Ihor');
myMap.set('key2', 'Alex');
myMap.set('key3', 'Al');

// дістаємо значення - викликати функцію get за ключем
console.log(myMap.get('key2'));

// видалення ключа
myMap.delete('key1');
console.log(myMap.get('key1')); // undefined

// функція keys() і values()
console.log(myMap.keys()); // виводить всі ключи
console.log(myMap.values()); // виводить всі значення

// ітерування по Map
for (let item of myMap) {
  console.log(item); //виводе пару ключ-значення у вигляді масиву
}
// ітерування по Map ключам
for (let item of myMap.keys()) {
  console.log(item);
}
// ітерування по Map значенням
for (let item of myMap.values()) {
  console.log(item);
}
// перевірка наявності значення
console.log(myMap.has('keys3'));

//
//
//
// Set - колекція унікальних значень (значень може бути багато, але збережені будуть тільки унікальні)
let mySet = new Set();
mySet.add(1);
mySet.add(1);
mySet.add(1);
mySet.add(1);
mySet.add(1);
mySet.add(2);
mySet.add(3);
console.log(mySet); // Set {1, 2}

// видалення ключа
mySet.delete(2);
console.log(mySet);

console.log(mySet.has(4)); // false

//
//
//
//  Задача зі співбечіди: вивести унікальні значення

let arr = [1, 2, 3, 4, 1, 1, 1, 1, 1, 1];

// Map
let newMap = new Map();

for (let i = 0; i < arr.length; i++) {
  newMap.set(arr[i], arr[i]);
}
console.log(newMap);

// Set
let newSet = new Set();

for (let i = 0; i < arr.length; i++) {
  newSet.add(arr[i]);
}
console.log(newSet);

// object 1
let obj = {};

for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = arr[i];
}
console.log(obj);

// object 2
let obj1 = {};

for (let i = 0; i < arr.length; i++) {
  if (!obj1[arr[i]]) {
    obj1[arr[i]] = arr[i];
  }
}
console.log(obj1);
