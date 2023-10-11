// Lecture 8

// HIGHER-ORDER FUNCTION (функція вищого порядку) - приймає або повертає інші функції
function func2() {
  console.log(1);
}

function func1(func2) {
  func2();
}

func1(func2); //викликаємо func1(), яка є функцією вищого порядку, а вона йде і диветься, що таке func2

// CALL BACK FUNCTION - викликається всередині іншої по завершенню дій
func2(); // - це функція call back

// глобальний об'єкт WINDOW
function myOwnFunction() {}
console.log(window); //виведе всі об'єкти window + myOwnFunction (коли запускається программа в js відразу запускається об'єкт window)

// CONTEXT Це абстрактний термін, що вказує на середовище виконання коду, яке містить змінні, об'єкти та інші дані, необхідні для виконання функції чи блоку коду (де функція була виконана, у який момент). Відомо, що в середовищі виконання коду також зберігається інформація про область видимості змінних, ланцюжок об'єктів, які викликають функції, і т. д.

const obj = {
  name: 'Ihor',
  chowContext: function () {
    console.log(this); // вказівник на context, там де буде викликана функція
    // this поcилається на об'єкт, тому контекстом виконання функції буде об'єкт
  },
};
obj.chowContext();

// !!! Стрілкова функція не використовувати в цьому контексті
const objArrow = {
  name: 'Ihor',
  chowContextArrow: () => {
    // у стрілочної функції нема контексту
    console.log(this); // у стрілочної функції нема context, її контекст - це об'єкт window
  },
};
objArrow.chowContextArrow();

var name = 'Tom'; // так як var, то створено у об'єкті window
function tom() {
  console.log(this.name + ' Runs'); // this посилається на window
}
// Invoke the function tom()
tom(); // викликається в глобальній області видимості і виводиться

// ARGUMENTS - псевдомасив, створюється автоматично, невидим, але можна вивести дані
// псевдомасив, тому що у нього немає ніяких вбудованих функцій які є у масиві, може достучатись тільки до довжини, працює тільки з довжиною, через [i]
function funcMult(a, b) {
  console.log(arguments.length); // або console.log(arguments[0]);
}
funcMult(1, 3);

// THIS посилається на поточний об'єкт
const obj2 = {
  name: 'Ihor',
  showName: function () {
    console.log(this.name);
  },
};
obj2.showName(); // Ihor

// Вбудовані методи
// CALL -використовуєтьсядля виклику функції з вказаним контекстом і аргументами

// EXAMPLE THIS whith CALL
const obj3 = {
  name: 'Ihor',
  surname: 'fghdjks',
}; // об'єкт у якого нічого нема

const obj4 = {
  name: 'Alex',
};

function showContext() {
  console.log(this);
} // функція,яка показує контекст там де вона була викликана
// в данному виподку контекстом функції буде глобальний об'єкт і буде показивати, що зберігається в об'єкті obj3
showContext.call(obj3); // {name: 'Ihor'} // функція покаже об'єкт, тепер this вказує не на глобальний об'єкт window, а на об'єкт на якому вона була викликана
showContext.call(obj4); // {name: 'Alex'}

// виклик функції function (word) через THIS
const person = {
  name: 'Ihor',
  saySmth: function (word) {
    console.log(`${word} ${this.name}`);
  },
};

const otherPerson = {
  name: 'Alex',
};
person.saySmth('Hello,');

// виклик функції function (word) через CALL
const person1 = {
  name: 'Ihor',
  saySmth1: function (word) {
    console.log(`${word} ${this.name}`);
  },
};

const otherPerson1 = {
  name: 'Alex',
};
person1.saySmth1.call(otherPerson1, 'Hello,'); //перший аргумент - об'єкт на якому хочемо викликати функцію, наступні - параметри які приймає функція, яку було викликано

// виклик функції function (word) через APPLY
const person2 = {
  name: 'Ihor',
  saySmth2: function (word) {
    console.log(`${word} ${this.name}`);
  },
};

const otherPerson2 = {
  name: 'Masha',
};
person2.saySmth2.apply(otherPerson2, ['Hello,']);

// виклик функції function (word) через BIND
const person3 = {
  name: 'Ihor',
  saySmth3: function (word) {
    console.log(`${word} ${this.name}`);
  },
};

const otherPerson3 = {
  name: 'Dasha',
};
const newSaySmth = person3.saySmth3.bind(otherPerson3); //нова функція newSaySmth, яка є зв'язкою об'єкту person3 та функції otherPerson3. У newSaySmth всередині копія otherPerson3 і функція всередині цього об'єкту, яка вміє щось казати (saySmth3). Все це зв'язано в окремий блок у пам'яті і видається за нову функцію newSaySmth і ця функція намертво пов'язана з saySmth3
newSaySmth('Hi');

// Example bind
function showContent() {
  console.log(this.name);
}

const otherPerson4 = {
  name: 'Alex',
};

const newSaySmth2 = showContent.bind(otherPerson4);
newSaySmth2();
