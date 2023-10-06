// Варіанти створення об'єктів
let obj = {
  apple: 3,
  bananas: 34,
  qiwi: 45,
};

// достуа до властивостей
console.log(obj); //Подивитись, що в об'єкті
console.log(obj.apple); //Подивитись значення, написати ключ

// Збереження об'єктів у пам'яті
obj.apple = 45; //зміна значення ключа
console.log(obj.apple);

// Додавання в об'єкт
obj.orange = 23;
console.log(obj);

// Object.freeze()
Object.freeze(obj); //Заморожування об'кта, після чого його не можна змінити
obj.apple = 70;
console.log(obj.apple); // 45

// видалення (не працює з freeze та seal)
let animal = {
  rabbit: 3,
  turtle: 5,
  cat: 7,
};
console.log(animal);

// Object.seal()
Object.seal(animal); // не дає видаляти, але дозволяє змінювати
delete animal.cat;
animal.turtle = 8;
console.log(animal);

// КОПІЮВАННЯ об'єктів

// const animalCopy = animal; // !проблема: змінюється основний масив
// animalCopy.turtle = 11;
// console.log(animal);

// правильне копіювання

// 1 копіювання першого рівня вкладеності
let fruits = {
  apple: 3,
  bananas: 34,
  qiwi: 45,
};
const fruitsCopy = {}; //спочатку створюємо масив куди хочемо скопіювати
Object.assign(fruitsCopy, fruits); // першим параметром вказуємо об'єкти куди копіюємо, другий параметр це об'єкт з якого робиться копія
fruits.bananas = 12;
console.log(fruitsCopy); // зміни у fruits не вплинули на fruitsCopy
fruitsCopy.bananas = 25;
console.log(fruits);
console.log(fruitsCopy);

// 2 глибоке копіювання
let animalPeople = {
  rabbit: 3,
  turtle: 5,
  user: {
    name: 'Ihor',
    surname: 'Mykh',
  },
  cat: 7,
};

// Object.keys()
console.log(Object.keys(animalPeople)); // виводе масив ключів ['rabbit', 'turtle', 'user', 'cat']

// for ... in по ключам
for (let item in obj) {
  console.log(item); // виведе вписок ключів obj
}

// Object.values()
console.log(Object.values(animalPeople)); // видає значення ключів [3, 5, {…}, 7]

// 1
// for ... in по значенням
for (let item in animalPeople) {
  console.log(animalPeople[item]); // виведе список значень ключів obj
}

// 2
// for ... of по значенням об'єкта
for (let value of Object.values(animalPeople)) {
  console.log(value); // виведе список значень ключів obj
}

// for ... of так само може ходити по значенням масиву
let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
  console.log(value); // виведе список значень ключів obj
}

//  Глибоке клонування приклад від викладача
// подивитись тип item (кожен раз дивиться тип значення за ключем)
// (особливо важливе тоді, коли вихідний об'єкт містить вкладені об'єкти або масиви)
let animalPeopleCopy = {};
for (let item in obj) {
  if (typeof obj[item] === 'object') {
    console.log('Object');
  } else {
    animalPeopleCopy[item] = obj[item];
  }

  console.log(animalPeopleCopy);
}

// приклад з chatGPT
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj; // повертаємо примітиви і null без змін
  }

  if (Array.isArray(obj)) {
    // якщо це масив, клонуємо його елементи
    return obj.map(deepClone);
  }

  // якщо це об'єкт, клонуємо його властивості
  const clonedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }

  return clonedObj;
}

// let animalPeople вже була об'явлена вище, тому закоментила
// let animalPeople = {
//   rabbit: 3,
//   turtle: 5,
//   user: {
//     name: 'Ihor',
//     surname: 'Mykh',
//   },
//   cat: 7,
// };

let animalPeopleCopy2 = deepClone(animalPeople);
console.log(animalPeopleCopy2);

// JSON
// переводе об'єкт у строку
let trees = {
  birch: 5,
  oak: 2,
  bush: {
    raspberry: 3,
    currant: 2,
  },
  maple: 7,
};
// JSON.stringify переводить об'єкт у строку
console.log(JSON.stringify(trees)); // {"birch":5,"oak":2,"bush":{"raspberry":3,"currant":2},"maple":7}

// JSON.parse виводить з формату строки зворотньо у об'єкт
console.log(JSON.parse(JSON.stringify(trees))); // {birch: 5, oak: 2, bush: {…}, maple: 7}

let treesCopy = JSON.parse(JSON.stringify(trees));
trees.bush.currant = 'Alex';
console.log(treesCopy); //не змінений, бо відбулося глибоке клонування

//
// ФУНКЦІЇ Основи роботи
//
// Spread operator ...
let arr1 = [1, 2, 3, 4];
let arrCopy = [...arr1];
console.log(arrCopy); //copy array

const fruit2 = {
  apple: 4,
  banana: 5,
};
let fruit2Copy = { ...fruit2 };
console.log(fruit2Copy); // copy object (the shape of the parentheses matters)

// function declaration
function func() {
  console.log('1');
}

// function expression
const func1 = function func() {
  console.log('2');
};

// Передача параметрів у функцію
function multNumByTwo(number, multBy = 2) {
  return number * multBy;
}
console.log(multNumByTwo(4, 4));

// якщо є два параметри, але другий не обов'язковий і треба щоб функція працювали і з одним
function SumName(name, surname = '') {
  return name + surname;
}
console.log(SumName('John'));

// якщо не знаємо кількість аргументів (операторів)
function spreadOperator(...args) {
  console.log(args);
}
console.log(spreadOperator('John', 'Smith', 'Jo')); //['John', 'Smith', 'Jo']

// перебір масива
function searchArray(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}
console.log(searchArray('John', 'Smith', 'Jo'));
// John
// Smith
// Jo

// стрілочни функції
let fff = () => {};

// HW
// Дан масив об'єктів. Вивести масив телефонних номерів користувачів, у яких баланс більше 2000 доларів. І знайти суму всіх балансів користувачів
// переробити через forEach
let users = [
  {
    index: 0,
    isActive: true,
    balance: 2226.6,
    name: 'Eugenia Sawyer',
    gender: 'female',
    phone: '+1 (840) 583-3207',
    address: '949 John Street, Rose, Puerto Rico, 1857',
  },
  {
    index: 1,
    isActive: true,
    balance: 2613.77,
    name: 'Pauline Gallegos',
    gender: 'female',
    phone: '+1 (985) 593-3328',
    address: '328 Greenpoint Avenue, Torboy, North Dakota, 6857',
  },
  {
    index: 5,
    isActive: false,
    balance: 1790.56,
    name: 'Suzette Lewis',
    gender: 'female',
    phone: '+1 (837) 586-3283',
    address: '314 Dunne Place, Bawcomville, Guam, 9053',
  },
];

let arrResult = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].balance > 2000) {
    arrResult.push(users[i]);
  }
}
console.log(arrResult);

// Перероблено через forEach
let arrResult = [];

users.forEach((user) => {
  if (user.balance > 2000) {
    arrResult.push(user);
  } // user.balance > 2000 ? arrResult.push(user) : null;
});

console.log(arrResult);
