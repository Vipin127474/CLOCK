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

dice0.classList.add('hidden');
// we declare the empty variables outside the initial functions
let Scores, currentScore, activePlayer, playing=true ;


function initial()
{
    // player-0, player-1 for Scores
    Scores=[0, 0];
    currentScore=0;
    activePlayer=0;

    // state variable which 
    playing=true;

score0.textContent=0;
score1.textContent=0;
current0El.textContent=0;
current1El.textContent=0;

dice0.classList.add('hidden');
player0El.classList.remove('player-winner');
player1El.classList.remove('player-winner');
player0El.classList.add('player-active');
player1El.classList.remove('player-active');
};

initial();

function switchPlayer() {
    document.getElementById(`current-${activePlayer}`).textContent=0;
    currentScore=0
    activePlayer = activePlayer === 0 ? 1 : 0;
    
    player0El.classList.toggle('player-active');
        player1El.classList.toggle('player-active');
    }
    
    
    // rolling dice functionality
    btnRoll.addEventListener('click', function() {
        if(playing){
            const dice=Math.trunc(Math.random()*6)+1;
            
            dice0.classList.remove('hidden');
            dice0.src=`dice-${dice}.png`;
            
            if(dice!==1)
            {
                //1.add dice to current score
                currentScore+=dice; 
                document.getElementById(`current-${activePlayer}`).textContent=currentScore;
                
            }
            else{
                //2. switch to next player
                // document.getElementById(`current-${activePlayer}`).textContent=0;
                // currentScore=0
                // activePlayer = activePlayer === 0 ? 1 : 0;
                
                // player0El.classList.toggle('player-active');
                // player1El.classList.toggle('player-active');
                
                // here we refactrating the code because it use
                // at multiple places
                switchPlayer();
            }
        }
    })

    
    btnHold.addEventListener('click', function() {
        if(playing){
            
        // 1. add current score to the active player's score
        
        Scores[activePlayer]+=currentScore;   
        //   Scores[1]= Scores[1] + currentScore
        document.getElementById(`score-${activePlayer}`).textContent=Scores[activePlayer];
        
        
        // 2. Check if player's score is >=100 
        if(Scores[activePlayer]>=100)
        {
            //finish the game
            playing=false;
            dice0.classList.add('hidden');
            
            
            document.querySelector(`.player-${activePlayer}`).classList.add('player-winner');
            let s=document.querySelector(`.player-${activePlayer}`).classList.remove('player-active');
        }
        else{
            
            //switch to the nex player
            switchPlayer();
        }
    }
})

// reset the game
// btnNew.addEventListener('click', function() {
//     initial();
// });

                //  --->>>OR

btnNew.addEventListener('click', initial);                