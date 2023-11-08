// Lecture 20 ESNext
'use strict';

// Spread & Rest оператори

// SPREAD -розпаковує з масиву
function add(a, b, c) {
  return a + b + c;
}

const arr = [1, 3, 4];
console.log(...arr); // 1 3 4
// робимо копію масива
const arrCopy = [...arr]; // скопійований вміст масива з бажаного масиав
const arrCopyAdd = [0, ...arr]; // копія з додаванням бажаного

console.log(add(...arr)); // дорівнює add(arr[0], (arr[1], (arr[2])
console.log(arrCopy); // (3) [1, 3, 4]
console.log(arrCopyAdd); // (4) [0, 1, 3, 4]

//spread whith object
const obj = {
  name: 'Ihor',
  age: 25,
  id: 1,
};

obj.name = 'Alex';
const objCopy = { ...obj };
console.log(objCopy); // {name: 'Alex', age: 25, id: 1}

// REST - запаковує в масив
function add2(a, b) {
  return a + b;
}

console.log(add2(3, 4, 5, 6, 6)); // функція прийме лише два арнументи по замовчуванню, а інші відкине (але вони все одно зберігаються в псевдомасиві arguments)

// тому застосовують rest оператор ...args
function addRest(...args) {
  console.log(args);
}
addRest(3, 4, 5, 6, 6); // (5) [3, 4, 5, 6, 6]

// сума всіх елементів
function addRestSum(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}
console.log(addRestSum(3, 4, 5, 6, 6)); // 24

function addRestSum2(a, b, ...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum + a + b;
}
console.log(addRestSum2(3, 4, 5, 6, 6)); // 24

// ДЕСТРУКТУРИЗАЦІЯ arr, obj, function
const arr1 = [1, 2];
const [a, b] = arr1; // це теж саме, що і let a1 = arr[0], let a2 = arr[1]
console.log(a, b); // 1 2

// якщо треба вивести перше і трете число, а друге пропустити
const arr2 = [1, 2, 3];
const [c, , d] = arr2; // це теж саме, що і let a1 = arr[0], let a2 = arr[1]
console.log(c, d); // 1 3

// якщо треба вивести перше і друге число, а все іне запихнути в залишковий масив
const arr3 = [1, 23, 4, 5, 6, 77];
const [a1, b1, ...arrLast] = arr3;

console.log(a1, b1, arrLast); // 1 23 >(4) [4, 5, 6, 77]

// деструкція на об'єктах
const user = {
  name: 'Alex',
  age: 25,
  id: 23,
};
const { name, id } = user;
console.log(id); // 23

const { name: fullName, age } = user;
console.log(fullName); // Alex

// деструкція на функціях
// option 1
function showInfo(user) {
  console.log(user.name, user.age);
}
showInfo(user); // Alex 25

// option 2
function showInfo2({ name, age }) {
  console.log(name, age);
}

showInfo(user); // Alex 25

// SYMBOL
const mySymbol = Symbol('description');

console.log(mySymbol); // Symbol(description)
console.log(typeof mySymbol); // symbol

const user2 = {
  name: 'Bob',
  age: 15,
  id: 44,
  [mySymbol]: 'password', // це поле не ітерується
};

for (let item in obj) {
  console.log(item);
} // ввиведе всі ключі в об'єкті, окрім [mySymbol]: 'password' - ці дані будуть приховані

// отримання симбольних(прихованих) ключів через спеціальну функцію Object.getOwnPropertySymbols()
const keys = Object.getOwnPropertySymbols(user2);
console.log(keys); // [Symbol(description)]

// ІТЕРАТТОРИ
const itr = [1, 2, 3, 4, 5];

for (let i = 0; i < itr.length; i++) {
  console.log(itr[i]);
}

// або
for (let item of itr) {
  console.log(item);
}

// самописний ітератор (вже реалізован під капотом)
// ця функція знає індекс і повертає якийсь об'єкт
function createIterator(arr) {
  // для масиву , не працює для об'єкта
  let index = 0;
  return {
    next: function () {
      if (index < arr.length) {
        // перевіряє чи наш індекс менше довжини масива
        return { value: itr[index++], done: false };
      } else {
        // якщо дійшли до кінця масиву
        return { done: true };
      }
    },
  };
}

// після того, як прописали функцію створюємо ітератор
const iterator = createIterator(itr);

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: 4, done: false}
console.log(iterator.next()); // {value: 5, done: false}
console.log(iterator.next()); // {done: true}
console.log(iterator.next()); // {done: true}

// та ж конструкція ітератора тільки для об'єкта, щоб можна було проходити по об'єкту for of
// option 1
const range = {
  from: 1, // з якого числа ітеруватись
  to: 10, // до якого числа ітеруватись

  // додаємо ітератор за допомогою Symbol
  [Symbol.iterator]: function () {
    return this;
  },

  // реалізуємо функцію next()
  next: function () {
    if (this.from <= this.to) {
      return { value: this.from++, done: false }; // якщо не дійшов до кінця
    } else {
      return { done: true }; // якщо дійшов до кінця
    }
  },
};

for (let item of range) {
  console.log(item);
}

// option 2
const range2 = {
  index: 0, // починаючи з якого елемента
  to: 2, // по який елемент ітерувати
  names: ['Ihor', 'Alex', 'Bob'],

  [Symbol.iterator]: function () {
    return this;
  },

  next: function () {
    if (this.index <= this.to) {
      return { value: this.names[this.index++], done: false };
    } else {
      return { done: true };
    }
  },
};

for (let item of range2) {
  console.log(item);
}

// ГЕНЕРАТОРИ
// цикл з пожливістю ставити на паузу і знімати з паузи
// завантаження постів по 10 штук
function* getDataStepByStep(postCount) {
  let count = 0;
  while (count <= postCount) {
    yield count; // yield дозволяє ставити цикл на паузу і при цьому не зупиняти його повністю
    count += 10;
  }
}

const postGenerator = getDataStepByStep(60);
console.log(postGenerator.next()); // кожен раз буде виводити по 10
console.log(postGenerator.next()); // кожен раз буде виводити по 10
console.log(postGenerator.next()); // кожен раз буде виводити по 10
console.log(postGenerator.next()); // кожен раз буде виводити по 10
console.log(postGenerator.next()); // кожен раз буде виводити по 10
console.log(postGenerator.next()); // кожен раз буде виводити по 10
console.log(postGenerator.next()); // кожен раз буде виводити по 10
console.log(postGenerator.next()); // true
