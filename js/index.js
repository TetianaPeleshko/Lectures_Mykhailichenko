// Лекція 11

'use strict';

// input
document.querySelector('#text-input').addEventListener('input', (event) => {
  console.log(event.target.value);
});

// select
document.querySelector('#text-select').addEventListener('change', (event) => {
  console.log(event.target.options); // HTMLOptionsCollection(3) [option, option, option, selectedIndex: 1]
  console.log(event.target.options[event.target.selectedIndex]); // <option>Orange</option>
  console.log(event.target.options[event.target.selectedIndex].value); // Orange
  console.log(event.target.options[2].selected); // false або true в залежності від обраної опції(індуксу)

  for (let i = 0; i < event.target.options.length; i++) {
    console.log(event.target.options[i].selected);
  } // покаже всі елементи через false або true у вигляді списку
});

// textarea
let myArea = document.querySelector('#text-area');

console.log(myArea.value); // якщо вивести до текста в console.log буде пусто, а якщо після myArea.value, то в console буде виведен заданий текст
myArea.value = 'Hello, I`m inside textarea'; // також мжливо працювати як з text-input

// checkbox
let myCheckBox = document.querySelector('#my-check');
console.log(myCheckBox.checked);
myCheckBox.checked = true; //true, якщо хочемо, щоб прапорець при завантаженні сторінки вже стояв і false, якщо ні

// couple of checkbox
document.querySelector('#btn').addEventListener('click', (event) => {
  // по кліку достати всі checkboxes
  let checkboxes = document.querySelectorAll(
    'input[name ="programming"]:checked'
  );
  let values = []; //місце для всіх checkbox які були чекнуті
  checkboxes.forEach((checkbox) => {
    values.push(checkbox);
  });
  console.log(values);
});

// form
let form = document.querySelector('#my-form');
// подивитись які є елементи у всіх обєектів
console.log(form.elements);
// подивитись які є елементи у одного конкретного елемента по id (не працює)?
console.log(form.elements['name']);

// CUSTOM FORM
// для зберегання message від перевірки, коли поле для вводу залишилось пусте
const emptyUserName = 'Please type your name!';
const emptyEmail = 'Please type your email!';

// об'єкт в якому будемо зберігати дані
const userData = {
  userName: '',
  email: '',
  languages: [],
};

let customForm = document.querySelector('#signup-form');
let errorSpan = document.querySelector('#error-span');

document.querySelector('#username').addEventListener('input', (event) => {
  // version1
  // if (!event.target.value) {
  //   let errorText = document.createElement('span');
  //   errorText.textContent = emptyUserName;
  //   // додаємо span після label
  //   customForm.append(errorText);

  // version2
  if (!event.target.value) {
    errorSpan.textContent = emptyUserName;
  } else {
    errorSpan.textContent = ''; //прибирає 'Please type your name!' якщо починають вводити текст
    userData.userName = event.target.value;
  }

  // console.log(userData.userName);
});

document.querySelector('#email').addEventListener('input', (event) => {
  if (!event.target.value) {
    errorSpan.textContent = emptyEmail;
  } else {
    errorSpan.textContent = ''; //прибирає 'Please type your email!' якщо починають вводити текст
    userData.email = event.target.value;
  }
});

// document.querySelector('#email').addEventListener('input', (event) => {
//   userData.email = event.target.value;
// });

customForm.addEventListener('submit', (event) => {
  event.preventDefault(); // коли спрацьовує submit він ще й перезавантажує сторінку. Додаємо preventDefault() щоб позбутися поведінки за замовчуванням
  if (userData.userName && userData.email) {
    console.log('Sent to the server!');
  }
});
