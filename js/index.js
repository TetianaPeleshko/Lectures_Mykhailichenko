// Lecture 19
'use strict';

// МОДУЛІ, ЯКІ ЗАПУСКАЮТЬСЯ В БРАУЗЕРІ
// достукуємось до функції myOwnAdd, яка знаходиться в файлі mathUtils.js

// // export
import { myOwnAdd, myOwnMultiply } from './js/mathUtils.js';

console.log(myOwnAdd(4, 5));
console.log(myOwnMultiply(4, 5));

// export default (може бути лише один на файл)
import myOwnAdd1 from './mathUtils.js';
console.log(myOwnAdd1(5, 5));
