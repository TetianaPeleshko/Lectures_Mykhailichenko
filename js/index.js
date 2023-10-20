// Create smile data
const emojis = [
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
// для відмалювання кількості голосів заводимо окрему функцію
function updateVotes() {
  // перед кожним викликом showVotes у voteContainer треба достучатичь до HTML і обнулити всі дані
  voteContainer.innerHTML = '';

  emojis.forEach((item) => {
    let voteElement = document.createElement('div');
    // додаємо ще один клас з налаштуваннями в css
    voteElement.classList.add('vote-score');

    voteElement.textContent = item.voteCount;
    // не потрібно рахувати натискання бо фони вже пораховані в функції нижче, потрібно тільки вивести це число д инамічно на сторінку
    voteContainer.appendChild(voteElement);
  });
}

// Show emojis elements
function showEmojis() {
  // проходимось по всім смайлам
  emojis.forEach((item, index) => {
    // кожен раз створюємо новий елемент в який покладемо один смайл
    let emojyElement = document.createElement('div');
    emojyElement.textContent = item.smile;

    // тепер треба на кожен смайл навісити подію, щоб при кожному натисканні спрацьовував count
    emojyElement.addEventListener('click', () => {
      // заходимо у emojis по індексу та беремо voteCount
      emojis[index].voteCount++;
      // console.log(emojis); // перевірка чи рахує при натисканні на сторінці

      // щоб вивести voteCount на сторінку замість console.log() кожен раз showVotes
      updateVotes();
    });

    // додаємо смайли в контейнер
    smileContainer.appendChild(emojyElement);
  });
}

// Initialization
showEmojis(); // запускаємо функцію, щоб побачити смайли на сторінці
updateVotes(); // виводимо кількість голосів на сторінку  на нулях
