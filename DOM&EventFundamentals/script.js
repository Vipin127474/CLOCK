'use strict';
// Selecting elements
const score0=document.querySelector('#score-0');

// another way of selecting the ID's
const score1=document.getElementById('score-1');
const current0El=document.getElementById('current-0');
const current1El=document.getElementById('current-1');

const dice0=document.querySelector('.dice-0');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

//starting conditions
score0.textContent=0;
score1.textContent=0;

// it will automatically take hidden class in html file if we don't specify it in html file
dice0.classList.add('hidden')

// we define currentScore here because if this variable is inside
// of btnRoll addEventListener, the value is to be set to
//zero each time when we clicked the button.

let currentScore=0;


// rolling dice functionality

btnRoll.addEventListener('click', function() {
    // 1. generating a random dice roll
    //this variable here needs to be not a gobal variable
    //so not a variable outside because each time that we roll the dice, 
    //we want to generate a new number. so just define the 
    //variable here.

    const dice=Math.trunc(Math.random()*6)+1;

    //2. display the dice

    dice0.classList.remove('hidden');
    dice0.src=`dice-${dice}.png`;

    //3. check for rolled 1 
    if(dice!==1)
    {
        //1.add dice to current score
         currentScore+=dice;
         current0El.textContent=currentScore; // CHANGE LATER because in the future
                                            // we will need to display this current score at the current player
                                            // and to not always at player number zero or player number one   
    
    }
    else{
        //2. switch to next player
    
    }


})