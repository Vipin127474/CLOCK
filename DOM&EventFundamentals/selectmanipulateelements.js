// SELECTING AND MANIPULATING ELEMENTS.


'use strict';

console.log(document.querySelector('.message')
.textContent);

document.querySelector('.message'). textContent="😎correct number!"
// console.log(document.querySelector('.message')
// .textContent);

document.querySelector('.number'). textContent = 13;
document.querySelector('.score'). textContent = 12;

document.querySelector('.guess').value=15;
console.log(document.querySelector('.guess').value);

