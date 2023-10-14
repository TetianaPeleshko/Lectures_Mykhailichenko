// Lecture 9
// DOM
console.log(document);

// .getElementById() - Отримання елемента за id
// достучатись до div та змінити колір
document.getElementById('main-wrapper'); // достучались
// побачити та вивести в консоль
let element = document.getElementById('main-wrapper');
console.log(element); // консоль виведе div з усім, що всередині

element.style.backgroundColor = '#f8d6df'; // зміна кольору в div

// .getElementsByClassName - отримати елементи за классом
let elementsByClass = document.getElementsByClassName('main-wrapper'); // повертає асив елементів с заданим класом
console.log(elementsByClass); // поверне масив з усіма елементами
console.log(elementsByClass[0]); // поверне один елемент знайдений за класом та за вказаним індексом

// querySelector()- вміє брати елементи з DOM-дерева по класу(.), по id(#), по тегу('div')по чому завгодно
let elementByQuery = document.querySelector('#age-input'); //  видає перший елемент який знайшов по заданим параметрам
let elementByQueryAll = document.querySelectorAll('#age-input'); // видасть масив всіх знайдених елементів

// Створення нових елементів
let newElement = document.createElement('div'); // створений, але поки ніде не знаходиться, тільки в JS
newElement.textContent = 'Thia is a new element!'; // додаемо або змінюємо текст
newElement.style.backgroundColor = '#32e3e2'; // задаємо стиль

// .appendChild()
document.body.appendChild(newElement); // додаємо елемент на сторінку відразу в body в кінець

// Створення нових елементів 2
let newElement2 = document.createElement('div'); // створений, але поки ніде не знаходиться, тільки в JS
newElement2.textContent = 'This is a new element!'; // додаемо або змінюємо текст
newElement2.style.backgroundColor = '#32e3e2'; // задаємо стиль

let mainWrapper = document.querySelector('#main-wrapper');
mainWrapper.appendChild(newElement2); // додаємо елемент на сторінку у node з id main-wrapper в кінець
console.log(document.body);

// видалення елементів
document.body.removeChild(newElement);
// mainWrapper.removeChild(newElement2);

// подивитись елементи, які є всередині
console.log(mainWrapper.children);

// // видалити, щось з середини mainWrapper
// mainWrapper.removeChild(mainWrapper.children[1]); // видалиться те, що під індексом 1

// ПОДІЇ
// onklick (html) - так не робити!!!
function func() {
  console.log(1);
}

// Додавання події на кнопку
let button = document.querySelector('#age-function'); // звертаємось до кнопки
button.addEventListener('click', func); // додаємо подію (подія, функція)

// Додавання події на кнопку 2
let button2 = document.querySelector('#age-function2');

function ageFunction() {
  let input = document.querySelector('#age-input2'); // вибираємо input по id
  // console.log(input.value); // перевірка, value це те, що зберігається в input як текст
  let mainWrapper2 = document.querySelector('#main-wrapper'); // вибираємо головний div

  // Видаляємо попередній текстовий елемент (якщо він існує)
  let previousTextElement = document.querySelector('#main-wrapper span');

  if (previousTextElement) {
    mainWrapper2.removeChild(previousTextElement); // очистка перед новим введенням даних
  }

  let textElement = document.createElement('span'); // створюємо елемент
  if (+input.value > 50) {
    textElement.textContent = 'You are too old!';
  } else {
    textElement.textContent = 'You are too young!';
  }

  mainWrapper2.appendChild(textElement);
}
button2.addEventListener('click', ageFunction); // інформація виводиться як тільки щось набрати в input

// CALCULATOR
let firstNumber = '';
let secondNumber = '';
let whichNumber = 'one';
let operation;

let input3 = document.querySelector('#age-input3');
let wrapper = document.querySelector('#main-wrapper2');

function changeNumber() {
  if (whichNumber === 'one') {
    whichNumber = 'two';
    changeInputValue('');
  } else {
    whichNumber = 'second';
    changeInputValue('');
  }
}

function changeInputValue(string) {
  input3.value = string;
}

function showResult(resultText) {
  let resultElement = document.createElement('span');

  resultElement.textContent = resultText;

  wrapper.appendChild(resultElement);
}

for (let i = 0; i < 10; i++) {
  document.querySelector(`#btn-${i}`).addEventListener('click', () => {
    // console.log(i); // при натисканні на цифри в консолі виводить відповідні цифри

    if (whichNumber === 'one') {
      firstNumber += i;
      input3.value = firstNumber; // при натисканні цифри виводяться на табло калькулятора
    } else {
      secondNumber += i;
      input3.value = secondNumber;
    }
  });
}

document.querySelector('#calculate').addEventListener('click', () => {
  switch (operation) {
    case 'multiply':
      // console.log(firstNumber * secondNumber);
      showResult(
        `${firstNumber} * ${secondNumber} = ${(
          firstNumber * secondNumber
        ).toFixed(2)}`
      );
      changeInputValue('');
      break;
    case 'devide':
      // console.log(firstNumber / secondNumber);
      showResult(
        `${firstNumber} / ${secondNumber} = ${(
          firstNumber / secondNumber
        ).toFixed(2)}`
      );
      changeInputValue('');
      break;
    case 'subtract':
      // console.log(firstNumber - secondNumber);
      showResult(
        `${firstNumber} - ${secondNumber} = ${(
          firstNumber - secondNumber
        ).toFixed(2)}`
      );
      changeInputValue('');
      break;
    case 'add':
      // console.log(+firstNumber + +secondNumber);
      showResult(
        `${firstNumber} + ${secondNumber} = ${(
          +firstNumber + +secondNumber
        ).toFixed(2)}`
      );
      changeInputValue('');
      break;
    default:
      console.log('Nothing...');
  }

  // console.log(firstNumber);
  // console.log(secondNumber);
});

document.querySelector('#multiply').addEventListener('click', () => {
  operation = 'multiply';
  changeNumber();
});
document.querySelector('#devide').addEventListener('click', () => {
  operation = 'devide';
  changeNumber();
});
document.querySelector('#subtract').addEventListener('click', () => {
  operation = 'subtract';
  changeNumber();
});
document.querySelector('#add').addEventListener('click', () => {
  operation = 'add';
  changeNumber();
});
