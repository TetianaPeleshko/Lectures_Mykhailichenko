const myMath = require('./mathNode');

myMath.addNumbers(3, 5);
myMath.multiplyNumbers(3, 5);

// підключення викачаної бібліотеки
const downloadedMath = require('mathjs');

// вибираємо функцію для роботи на вкладці Readme
console.log(downloadedMath.round(532.7325424, 3));
