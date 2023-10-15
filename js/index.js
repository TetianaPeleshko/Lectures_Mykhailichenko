// Lecture 10
// BOM
// Bubbling (сплиття (як бульбашки)) Chrome
document.querySelector('#child').addEventListener('click', function () {
  console.log('Child'); // Child // Parent -ефект сплиття на всіх батьківських елементах де вказана подія 'click' - працює за замовчуванням
});

document.querySelector('#parent').addEventListener('click', function () {
  console.log('Parent');
});

// Capturing (захоплення) працює як bubbling, але навпаки від parent до child
document.querySelector('#child1').addEventListener('click', function () {
  console.log('Child1'); // Prent //Child
});

document.querySelector('#parent1').addEventListener(
  'click',
  function () {
    console.log('Parent1');
  },
  true
); // третім аргументом буде 'true'

// Об'єкт Event (з'являється, коли ми кудись натискаємо і коли ми додаємо якусь функцію через addEventListener у нас з'являється доступ до цього об'єкту Event)
document.querySelector('#child2').addEventListener('click', function () {
  console.log('Child2'); // Prent //Child
});
document.querySelector('#parent2').addEventListener('click', function (Event) {
  console.log(event.target); // виклик Event, виведе Event як об'єкт з усіма додатковими параметрами
  // .target це посилання на елемент, який був натиснений (знаходиться всередині Event)
  console.log('Parent2');
});

// stopPropagation (stopImmediatePropagation) - вбудована функція в event - зупиняє сплиття
// Виришення проблеми зі спливанням
document.querySelector('#child3').addEventListener('click', function (e) {
  console.log('Child3');
  e.stopPropagation(); // виведе тільки Child3
});

document.querySelector('#parent3').addEventListener('click', function (Event) {
  console.log('Parent3');
});

// preventDefault - відміняє поведінку за замовчуванням (у данному випадку не буде переходити за посиланням)
document.querySelector('#myLink').addEventListener('click', (e) => {
  e.preventDefault();
});

// location - вбудовано в window
console.log(location); // хост, повне посилання де знаходимось і т.д.

// кнопка за якою можна перезавантаживати сторінку
document.querySelector('#child3').addEventListener('click', function (e) {
  location.reload();
  e.stopImmediatePropagation();
});

// виводить в консолі інформацію про екран
document.querySelector('#child4').addEventListener('click', function (e) {
  console.log(screen);
  e.stopImmediatePropagation();
}); //Screen {availWidth: 1536, availHeight: 816, width: 1536, height: 864, colorDepth: 24, …}

//  Планування виконання коду
//  setTimeout
document.querySelector('#child5').addEventListener('click', function (e) {
  setTimeout(() => {
    console.log('Inside timeout!');
  }, 2000);
  e.stopImmediatePropagation();
});

document.querySelector('#child6').addEventListener('click', function (e) {
  let count = 0;
  let IntervalId = setInterval(() => {
    console.log('Inside timeout!');
    console.log(count);
    if (count > 5) {
      clearInterval(IntervalId);
    }
    count++;
  }, 2000);
}); // виведе від 0 до 6
