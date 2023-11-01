// Lecture 18
// 'use strict';

// РУЧНИЙ СПОСІБ ПРОПИСУВАННЯ XMLHttpRequest ЗАРАЗ НЕ ВИКОРИСТОВУЄТЬСЯ

// сайт з відкритим (ip) доступом https://dummyjson.com/docs/products в Get products of a category скопіювати fetch(https://...) і зберегти в const
const url = 'https://dummyjson.com/products/category/smartphones';
const xhr = new XMLHttpRequest();

xhr.open('GET', url);

// xhr.responseType = 'json';

// onload спрацює коли все добре
xhr.onload = () => {
  let data = JSON.parse(xhr.response); // response - це та відповідь,яка прийде з сервера
  console.log(data.products); // в консолі виведе звичайний масив з продуктами які прийшли

  if (xhr.status > 400) {
    console.log('error');
  } else {
    console.log(data.products); // data.products = xhr.response, тільки розпарсений
  }

  // console.log(xhr.status); // для перевірки статусу помилки
};

// обробка помилки якщо вона є
// onerror спрацює коли єпомилка
xhr.onerror = () => {
  console.log(xhr.response);
};
xhr.send(); // запит був надісланий

//
//

// GET запит

// розділення url на базовий (завжди однаковий) і залишок

const baseUrl = 'https://dummyjson.com';
const smartphonesUrl = '/products/category/smartphones';
const categoryUrl = '/products/categories';
const addProductUrl = '/products/add';

// коли викличется функція sendRequest, спрацює та функція яка є у промісі і поверне результат виконання промісу з яким можно далі взаємодіяти
function sendRequest(method, url, data = null) {
  // data дорівнюємо null, щоб зробити цей параметр уніфікованим і з ним не було проблем, коли він не потрібен
  return new Promise((resolve, reject) => {
    const xhr1 = new XMLHttpRequest();

    xhr1.open(method, url);

    xhr1.responseType = 'json'; // це те, що мені прийде (в якому форматі воно мені потрібно)
    xhr1.setRequestHeader('Content-Type', 'application/json'); // говоримо, що серверу вередаємо json, для цього потрібна вбудована функція setRequestHeader,приймає два параметри 1. назва того хеедру, який я хочу модіфікувати 2. значення яке я хочу перевстановити

    xhr1.onload = () => {
      if (xhr1.status > 400) {
        console.log('error');
      } else {
        resolve(xhr1.response);
      }
    };

    xhr1.onerror = () => {
      console.log(xhr1.response);
    };
    xhr1.send(JSON.stringify(data)); // вказуємо data для надсилання даних на сервер
  });
}

// тепер цю функцію ми можемо використовувати уніфіковано. Та далі обробляємо Promise який прийшов з функції

sendRequest('GET', baseUrl + categoryUrl)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

//
//
// POST запит

const myProduct = {
  title: 'product1',
};

sendRequest('POST', baseUrl + addProductUrl, /*data*/ myProduct) // data - це поле, яке я хочу покласти на сервер за своїм посиланням, також додаємо це поле в самій функції (трктій аргумент data заміняємо на myProduct)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

// FETCH - заміна ручного прописування HttpRequest (GET та POST), іноді зустрічається

// const ті ж самі
// const baseUrl = 'https://dummyjson.com';

// const smartphonesUrl = '/products/category/smartphones';
// const categoryUrl = '/products/categories';
// const addProductUrl = '/products/add';

function sendRequestFetch(method, url, data = null) {
  return fetch(url).then((response) => {
    return response.json();
  });
}

const myProductFetch = {
  title2: 'product2',
};

sendRequestFetch('GET', baseUrl + smartphonesUrl)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

// створюємо запит POST
function sendRequestFetchPost(method, url, data = null) {
  return fetch(url, {
    method: method, // вбудований метод до якого передається метод з sendRequestFetch який прийде
    body: JSON.stringify(data), // тіло запиту - дані які будуть передаватись
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.error(error);
    }
  });
}

const myProductFetchPost = {
  title3: 'product3',
};

sendRequestFetchPost('POST', baseUrl + smartphonesUrl, myProductFetch)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
