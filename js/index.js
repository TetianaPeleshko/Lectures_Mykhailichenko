// Lecture 16

// FUNCTION CONSTRACTION, INSTANCEOF, оператор NEW
function Car(model, owner) {
  this.model = model; // створюємо поле model і це поле запповнити моделлю, яку будемо створювати
  this.owner = owner;
  this.drive = function () {
    //ця функція нічого не приймає,а лише каже, що машина вміє іхати
    console.log('Driving');
  };
}

// використання функції-конструктора
const Toyota = new Car('Toyota', 'Ihor'); // створюємо об'єкт і пишимо слово new для того, щоб скористатися функцією конструктором (тобто викликати її) і до неї передати назву та власника
console.log(Toyota);

// Вбудована функція (так само працює і з Number, Array, Object і т.д.)
let str = new String('we');
console.log(str); // String {'we'} 0:"w" 1:"e" - розіб'є поелементно. Елементів буде стільки скільки букв разом з пробілами та іншими символами
let str1 = 'we';
console.log(str1); // створена для порівняння зі str (str - об'єкт, а str1 - звичайна строка)
console.log(str1 + str); // буде звичайна конкатенація (виведе wewe)

// INSTANCEOF
console.log(Toyota instanceof Car); // true

let obj = new Object({});
console.log(obj instanceof Object); // true

// ПРОТОТИПНЕ СПАДКУВАННЯ
const animal = {
  hair: true,
  numbersOfPows: 4,
};

const cat = {
  // зараз у кота є тільки хвіст, треба передати і інші властивості, які є у animal
  tail: true,
};

// метод1 створення на самому початку прототипа
const cat1 = Object.create(animal);
console.log(cat1); // генерує новий об'єкт на основі animal
cat1.tail = true; // додаємо ще якусь властивість

// метод 2 __PROTO__
cat.__proto__ = animal; // передаємо в cat властивості animal
console.log(cat);

// !!!!! Зазвичай пишуть так
// або теж саме але інший синтаксис
const cat3 = {
  tail: true,
  __proto__: animal,
};
console.log(cat3);

// Сеттери та Геттери (нихто не пише)
// Варіант 1
const cat5 = {
  tail: true,
  setTailToCat: function (hasTail) {
    // ця функція в об'єкті змінює якусь властивість у кота це SET функція (приймає змінну, яка вказує є хвіст чи ні)
    this.tail = hasTail; // через this, буде передавати true вбо false
  },

  getTail: function () {
    // ця функція просто виводить є хвіст чи ні
    console.log(this.tail);
  },
  __proto__: animal,
};
cat5.setTailToCat(false); // змінюємо значення
cat5.getTail(); // true (і false якщо змінити значення)

// Варіант 2 Одне і теж саме set та get який використовується зараз
const cat6 = {
  tail: true,
  set TailToCat(hasTail) {
    this.tail = hasTail; // через this, буде передавати true вбо false
  },

  get Tail() {
    console.log(this.tail);
  },
  __proto__: animal,
};
cat6.TailToCat = false; // змінюємо значення
console.log(cat6); // true (і false якщо змінити значення)

// ЗАМІСТТЬ SET ТА GET ЗАРАЗ ПИШУТЬ ТАК
cat.tail = true;
console.log(cat);

// КЛАСИ статичні властивості та методи
class Animal {
  constructor(hair1, numbersOfPows1) {
    // прописуємо конструктор для подальшого використання (є обов'язковий)
    this.hair1 = hair1;
    this.numbersOfPows1 = numbersOfPows1;
  }
  // якась функція (ключеве слово function не пишемо)
  speak() {
    console.log('Roar');
  }
}

// Створюємо першу тваринку
const animal1 = new Animal(true, 3); // передаємо аргументи, які нам потрібні
console.log(animal1);

// ПОЛІМОРФІЗМ
// спадкування з класом
// щоб не писати __proto__ в класах використовуємо extends
class Cat extends Animal {
  // аргументи потрібні, щоб вказати на основі чого реалізується Animal + унікальні властивості (tail)
  constructor(hair1, numbersOfPows1, tail) {
    // для виклика конструктора з батьківського класу є слово super
    super(hair1, numbersOfPows1);
    this.tail = tail; // додаткове поле, якого нема в батьківському класі
  }
  // викликаємо і перевизначаємо функцію, яка була у батьківського класу
  speak() {
    console.log('Mew');
  }
}

// створюємо об'єкт кота, щоб скористатись усіма цьома функцями
const myCat = new Cat(true, 4, true); // передаємо конструктор кота, зі своїми даними
myCat.speak(); // Mew

class Dog extends Animal {
  constructor(hair1, numbersOfPows1, tail) {
    super(hair1, numbersOfPows1);
    this.tail = tail;
  }
  speak() {
    console.log('Gav');
  }
}

const myDog = new Dog(true, 4, true);
myDog.speak(); // Gav

// STATIC
// приклад class, коли описується функціонал, який відразу можно використовувати, не створюючи окремі const
class MathOperation {
  static add(x, y) {
    // static - це ключове слово, яке дає можливість викликати функцію add? не створюючи окремий об'єкт
    return x + y;
  }
}

console.log(MathOperation.add(3, 5));
