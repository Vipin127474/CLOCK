// how to manipulate classes with javascript

'use strict';

const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const close=document.querySelector('.close-modal');

const showModal=document.querySelectorAll('.show-modal');
console.log(showModal);


function openModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener
        ('click', openModal
        
                  
// dot(.) is only for selector
// here we don't use the dot(.) because we are not select
// anything. we are just passing in the name of the class

            // modal.classList.remove('hidden');
            // overlay.classList.remove('hidden')

            // we don't use here because if there is multiple display
            // properties then we write  modal.style.display='block' for everone
           
            // modal.style.display='block'
        );   
}

// here we are not doing this "close.addEventListener('click', closeModal)". this would not work at all.
// because it will immediately call a function as soon as javascript execute this line. but that's not what we want to happen.
// we want closeModal function to be executed only as soon as click event happens

// for closing the modal window
close.addEventListener('click', closeModal)


overlay.addEventListener('click', closeModal)


