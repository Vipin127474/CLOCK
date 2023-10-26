'use strict';

const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const close=document.querySelector('.close-modal');

// disadvantage-: here querySelector only select he first element form 
// multiple elements
// const showModal=document.querySelector('.show-modal');
// console.log(showModal);

// so we use here
const showModal=document.querySelectorAll('.show-modal');
console.log(showModal);

// if we want to do something for each of them then we have to use for loop

for (let i = 0; i < showModal.length; i++) {
    console.log(showModal[i].textContent);
    
}