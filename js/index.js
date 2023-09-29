alert('This text from alert');

let answer = prompt('How are you?', 'OK'); // значення по замовчувані у полі для вводу prompt(message, default);
// let потрібна для зберігання відповіді від користувача
console.log(answer);

let result = confirm('Do you want leave website?');
if (result === true) {
  console.log('Go to other page');
} else {
  console.log('Stay here');
}
