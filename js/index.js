// Lecture 14 regular Expression

// TotalPrice
let priceArr = [
  {
    name: 'BMW',
    price: '$234234',
  },
  {
    name: 'BMW',
    price: '$234234',
  },
  {
    name: 'Toyota',
    price: '$234234',
  },
];

let total = 0;

priceArr.forEach((item) => {
  total += +item.price.replace('$', ''); // рахуємо сумму всіх price
});

console.log(total);

// indexOf та includes пошук підстроки в строці
// є вбудована функція у всі строки indexOf
let str = 'Hello world!';

console.log(str.indexOf('world')); // повертає номер індексу першого символу повного співпадіння
console.log(str.includes('world')); // повертає true або false

// Regular Expression -  RegExp
let str1 = 'Hello world ljfg adifu  dsjfk world';

let regexp = /world/;

// .TEST()
console.log(regexp.test(str1)); // виведе true або false

// .MATCH
console.log(str1.match(regexp)); // виведе масив з першим знайденим значенням

// g - global, якщо треба знайти всі співпадіння
let regexp1 = /world/g;
console.log(str1.match(regexp1));

// Метасимволи
// . (КРАПКА)
let text = 'abc, adc, a:c, 234567, 87, -34';
let regex = /a.c/g;

console.log(text.match(regex)); // виведе всі співпадіння, які починаються на a і закінчуються на c (g дасть змогу вивести всі співпадіння)

// вивести всі цифри
let regex1 = /\d/g;
console.log(text.match(regex1)); // виведе всі знайдені цифри масивом окремих цифр

// буква, цифра або символ
let regex2 = /\w/g;
console.log(text.match(regex2));

// для спецсімволів (шукає пробіл, табуляцію, перенос рядка і т.д.)
let regex3 = /\s/g;
console.log(text.match(regex3));

// купки
let text2 = 'jksjksjks jksdfgojksiaorgfhbg jhhfgj jksert dfsg jksert';
let reg = /(jks)+/g;

console.log(text2.match(reg)); // дістане всі послідовності jks

// Квантифікатори
let text3 = 'jksjksjjks jksdfgojksiaorgfhbg jjhhfgj jksert dfsg jksert';
let regex4 = /j*/g;

console.log(text3.match(regex4));

let regex5 = /j{2}/g;

console.log(text3.match(regex5));

// EXAMPLE 1

// перевірка телефона на валідацію
let phone = '+380686054796';

let regexp2 = /^\+380/; // 1. Номер повинен починатись на +380
console.log(regexp2.test(phone)); // true

let regexp3 = /^\+380\d{9}/; // 2. Номер повинен містити тільки 12 цифр (три вже вказали, залишилось ще 9)
console.log(regexp3.test(phone)); // true

let phone2 = '+3803467605';
console.log(regexp3.test(phone2)); // false, цифр менше ніж треба, але якщо іх більше, то буде true,тому що він знайде 12 необхідних і буде рахувати, що умова виконалась, те що цифр більше буде не важливим

let phone3 = '+3803465878588587605';
let regexp4 = /^\+380\d{9}$/; // $ означає де повинен закінчитись рядок
console.log(regexp4.test(phone3)); // false, якщо цифр більше ніж потрібно

// EXAMPLE 2

// Регулярний вираз для перевірки номера телефону
var phonePattern = /^\d{10}$/;

// Перевірка номера телефону
var phoneNumber = '1234567890'; // Ваш номер телефону для перевірки
if (phonePattern.test(phoneNumber)) {
  console.log('Номер телефону є валідним.');
} else {
  console.log('Номер телефону не є валідним.');
}

// EXAMPLE 3

// повинен починатись с букви
// повинин містити @ і далі повинен іни gmail.com

let mail = 'ihor@gmail.com';
let regExMail = /^[a-zA-Z][A-Za-z0-9]*@gmail\.com/;

// [a-zA-Z] - означає, що початок рядка (перший символ) може бути лише буквою як у верхньому так і у нижньому регистрі
// [A-Za-z0-9] далі можутьідти цифри та букви
// * означає, що таких букв і цифр може бути багато

console.log(regExMail.test(mail));

// EXAMPLE 4

var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// '^' - початок рядка.
// '[a-zA-Z0-9._%+-]+ '- цей шматок виразу відповідає локальній частині адреси електронної пошти перед символом "@". Він дозволяє букви в нижньому і верхньому регістрах, цифри та деякі дозволені спеціальні символи, такі як ".", "_", "%", "+", та "-". Квантифікатор + вказує, що ця частина може містити один або більше символів.
// '@' - символ "@" є обов'язковою частиною адреси електронної пошти.
// '[a-zA-Z0-9.-]+' - цей шматок виразу відповідає доменній частині адреси електронної пошти після символа "@". Він дозволяє букви в нижньому і верхньому регістрах, цифри, крапки та дефіси. Квантифікатор + вказує, що ця частина може містити один або більше символів.
// '\.' - це просто символ крапки між доменною частиною і розширенням.
// '[a-zA-Z]{2,}' - ця частина виразу відповідає розширенню (наприклад, "com", "org"). Вона дозволяє букви в верхньому і нижньому регістрах та вимагає, щоб розширення мало щонайменше два символи.
// '$' - кінець рядка.
