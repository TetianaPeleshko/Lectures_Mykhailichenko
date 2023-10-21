// Create smile data
const emojis = JSON.parse(localStorage.getItem('emojis')) || [
  {
    smile: '😀',
    voteCount: 0,
  },
  {
    smile: '🦋',
    voteCount: 0,
  },
  {
    smile: '🥶',
    voteCount: 0,
  },
  {
    smile: '👣',
    voteCount: 0,
  },
  {
    smile: '🦄',
    voteCount: 0,
  },
];

// Get smiles and vote containers
let smileContainer = document.querySelector('#smile-container');
let voteContainer = document.querySelector('#vote-container');

// Update vote scores
function updateVotes() {
  voteContainer.innerHTML = '';

  // змінюємо вхідний масив для forEach з emojis на votesArray
  emojis.forEach((item, index) => {
    let voteElement = document.createElement('div');
    voteElement.classList.add('vote-score');
    voteElement.textContent = item.voteCount;

    voteContainer.appendChild(voteElement);
  });
  localStorage.setItem('emojis', JSON.stringify(emojis));
  // для перевірки в консолі ввести localStorage.getItem('emojis')
}

// Show emojis elements
function showEmojis() {
  smileContainer.innerHTML = '';

  emojis.forEach((item, index) => {
    let emojiElement = document.createElement('div');
    emojiElement.textContent = item.smile;

    let smileDiv = document.createElement('div');
    let removeButton = document.createElement('button');

    // Add a remove button
    removeButton.textContent = 'X';
    removeButton.style.marginTop = '10px';
    removeButton.style.backgroundColor = '#d8c5f1';
    removeButton.style.border = '1px solid #9c56f8';
    removeButton.style.borderRadius = '5px';

    removeButton.addEventListener('click', () => {
      emojis.splice(index, 1);

      showEmojis(); // Оновити відображення смайлів
      updateVotes(); // Передати оновлений масив смайлів у функцію updateVotes
    });

    smileDiv.appendChild(emojiElement);
    smileDiv.appendChild(removeButton);

    smileDiv.addEventListener('click', () => {
      emojis[index].voteCount++;

      updateVotes();
    });
    // Adding a separate div to the smile
    smileContainer.appendChild(smileDiv);
  });
}

// Add emoji
let addSmileButton = document.querySelector('#add-cmile-button');
addSmileButton.addEventListener('click', () => {
  const newSmile = prompt('Enter a new smile:');

  if (newSmile !== null && newSmile !== '') {
    emojis.push({
      smile: newSmile,
      voteCount: 0,
    });

    // Оновлюємо відображення смайлів та голосів
    showEmojis();
    updateVotes();
  }
});

// Initialization
showEmojis();
updateVotes();

// Для зберігання даних в localStorage ви можете використовувати дві основні функції: localStorage.setItem() та localStorage.getItem(). Ось як це виконується в вашому коді:

// 1. Збереження даних в localStorage:
// Оновлюємо дані в localStorage з оновленими голосами
// localStorage.setItem('emojis', JSON.stringify(emojis));

// У цьому коді localStorage.setItem() використовується для збереження масиву emojis в localStorage. Ми використовуємо JSON.stringify(), щоб перетворити масив у рядок JSON перед збереженням.

// 2. Отримання даних з localStorage:
// const emojis = JSON.parse(localStorage.getItem('emojis')) || [
//   {
//     smile: '😀',
//     voteCount: 0,
//   },
//   // ... решта смайлів за замовчуванням
// ];
// У цьому коді ми використовуємо localStorage.getItem() для отримання збережених даних з localStorage. Ми використовуємо JSON.parse(), щоб розшифрувати рядок JSON та отримати з нього масив об'єктів. Якщо немає даних у localStorage, то ми встановлюємо значення за замовчуванням, яке містить початкові смайли.

// Загалом, такий підхід дозволяє зберігати дані в localStorage та відновлювати їх при завантаженні сторінки.
