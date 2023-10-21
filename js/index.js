// localStorage
localStorage.setItem('userName', 'Ihor'); // в консолі набрати localStorage + Enter
localStorage.setItem('userName1', 'Tetiana'); // в консолі набрати localStorage + Enter

// видалення з localStorage
localStorage.removeItem('userName');

// отримати дані з localStorage по ключу
console.log(localStorage.getItem('userName1'));
console.log(localStorage.getItem('userName2')); // якщо таких даних нема то поверне null

// перевірка чи є  дані по ключу
if (localStorage.getItem('userName2')) {
  console.log('Found');
} else {
  console.log('Not found');
}

// Додавання до об'єкту
const obj = {
  id: 1,
  userName3: 'Ihor',
};

localStorage.setItem('userData', JSON.stringify(obj)); // виведе дані у вигляжі строки
// JSON.stringify() перетворить в строоку об'єкт, а потім ця строка будеть передана у localStorage
console.log(localStorage.getItem('userData')); // виведе дані у вигляжі строки
console.log(JSON.parse(localStorage.getItem('userData'))); // спочатку виведе дані у вигляжі строки, а потім перетворить у javascript об'єкт

// cookie
const myCookie = document.cookie.split(';');
console.log(myCookie);

// знайти дані по ключу в cookie
for (let cookie of myCookie) {
  let data = cookie.split('=');
  console.log(data);

  if (data[0] == 'userName') {
    console.log(data[1]);
  }
}
