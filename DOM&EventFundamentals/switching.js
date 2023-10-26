'use strict';
// Selecting elements
const player0El=document.querySelector('.player-0');
const player1El=document.querySelector('.player-1');
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

dice0.classList.add('hidden')


let currentScore=0;

// here we take activePlayer because we want to know which player is playing now or which player is active
// and we set activePlayer 0 because we want to start with player-0 which is active when activePlayer is to be 0 
//and when activePlayer is 1 the player-1 is become active
//we set which player is active dynamically in btnRoll
let activePlayer=0;


// rolling dice functionality
btnRoll.addEventListener('click', function() {

    const dice=Math.trunc(Math.random()*6)+1;

    dice0.classList.remove('hidden');
    dice0.src=`dice-${dice}.png`;

    if(dice!==1)
    {
       
         currentScore+=dice;
        //  current0El is only working for player-0
        //  current0El.textContent=currentScore;   
    
    // to display the current score for the current player or active player
    // and not just always for player number 0
    //here we select the element dynamically 
        document.getElementById(`current-${activePlayer}`).textContent=currentScore;

    }
    else{
        //2. switch to next player
        document.getElementById(`current-${activePlayer}`).textContent=0;

        activePlayer = activePlayer === 0 ? 1 : 0;
        
        // toggle classList will add the class if it is not there
        // if it is there the toggle will remove it .
     player0El.classList.toggle('player-active')
     player1El.classList.toggle('player-active')

}
})