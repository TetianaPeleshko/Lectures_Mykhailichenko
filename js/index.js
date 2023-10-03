// (!city) або (city === null) якщо у city null, undefind або '' city буде true, тобто якщо в city нічого немає, то умова виконається

// WHILE
let x = 0;

while (x < 5) {
  x += 1;
  console.log(x); // 1, 2, 3, 4, 5
}

// // // // НЕСКІНЧЕННІ ЦИКЛИ, так писати не можна, цикл завжди повинен мати умову яка може закінчитися
// // // while (true) {
// // //  x += 1;
// // //  console.log(x);
// // // }

// DO ... WHILE
do {
  x += 1;
  console.log(x);
} while (x < 5);

// треба спитати число і потім вивести сумму чисел до цього числа. Наприклад 4,то треба вивести 1+2 1+3 1+4
let N = +prompt('Type your number!');
let sum = 0; // Змінна для збереження результату
let i = 0; // i - це ітератор

while (i <= N) {
  sum += i; // кожну ітерацію збільшуется sum на i
  i++; // кожну ітерацію збільшується на 1
}
console.log(sum); // 15, тому що 1+2=3 +3=6 +4=10 +5=15

i = 0;
let sum1 = 0;
// теж саме тільки do ... while
do {
  sum1 += i;
  i++;
} while (i <= N);
console.log(sum1);

let sum2 = 0;
// FOR
for (let i = 0; i <= N; i++) {
  sum2 += i;
}
console.log(sum2);

// BREAK ... CONTINUE
let N1 = +prompt('Type your number!');
let sum1 = 0; // Змінна для збереження результату

for (let j = 0; j <= N1; j++) {
  if (j === 3) {
    break; // лічильник повинен дойти до 5, але зупиниться на 3 і виведе тільки 1 і 2
  }
  sum1 += 1;
}
console.log(sum1);

let N2 = +prompt('Type your number!');
let b = 0; // Змінна для збереження результату

for (let b = 0; b <= N2; b++) {
  if (b === 5) continue;
  console.log(b);
}
for (let c = 0; c <= N2; c++) {
  if (c === 5) break;
  console.log(c);
}

// Приклад використання break в циклі for
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log('Цикл припинено на i = 3');
    break;
  }
  console.log(i);
}

// Приклад використання continue в циклі for
for (let j = 1; j <= 5; j++) {
  if (j === 3) {
    console.log('Пропущено ітерацію для j = 3');
    continue;
  }
  console.log(j);
}

// HOMEWORK
// Таблиця множення
for (let i = 1; i < 10; i++) {
  console.log(`7 * ${i} = ${7 * i}`);
}

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500
let sum = 0;
for (let j = 1; j <= 500; j++) {
  sum += j;
}
console.log(sum / 500);

// Вивести всі числа в діапазоні від 100 до 200 кратні
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let num = 9;
for (let i = 1; i <= 9; i++) {
  if (num % i === 0) console.log(i);
}

// Надрукувати повну таблицю множення від 1 до 10
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// ARRAYS
let userNames = ['Ihor', 12, '45', 'Dasha'];

userNames.push('Alex'); // додає в кінець масиву
console.log(userNames);

// вивести все, що є в масиві
for (let k = 0; let < userNames.length; i++) {
  console.log(userNames[i]);
}

// для кожного item всередині масива шось зробити
userNames.forEach((item) => {
  console.log(item);
}); // так само виведе все, що є в масиві

// СКЛАДНІШІ ЦИКЛИ
// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

let number1 = +prompt('Input number', '1');
let i = 1;
while (true) {
  if (number1 === Math.pow(3, i)) {
    console.log(`The number is - ${Math.pow(3, i)}`);
    break;
  } else if (Math.pow(3, i) > number1) {
    console.log('Not found');
    break;
  }
  i++;
}
