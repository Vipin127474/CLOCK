// REFACTORING OUR CODE : THE DRY PRINCIPLE

// REFACTORING TECHNIQUE ====> refactroing basically means to restructure the code but without changing how it works
// we do refactroing to improve the code and to eliminate the duplicate code  


'use strict'

let score=20;
let highscore=0;
let secretNumber=Math.trunc(Math.random()*20)+1;

function displayScore(score) {
    document.querySelector('.score').textContent=score;
}

document.querySelector('.check').addEventListener
('click', function (){

const guess=Number(document.querySelector('.guess'). value)
console.log(guess, typeof guess);


//when there is no input
if(!guess)
{
    document.querySelector('.message').textContent='no number'
}

//when player wins
else if(guess===secretNumber)
{
    document.querySelector('.message').textContent="Correct number";
    document.querySelector('.number'). textContent=secretNumber;
        
    document.querySelector('body').style.
    backgroundColor='#60b347';
    document.querySelector('.number').style.width='30rem';
 
    // highscore
    if (score>highscore) {  
        highscore=score    
    document.querySelector('.highscore'). textContent=highscore;
    }
}

else if(score!==secretNumber)
{
    if(score>1){
        document.querySelector('.message').textContent=
        guess>secretNumber ? 'Too High' : 'Too Low';
        score--;
        // document.querySelector('.score').textContent=score;
        displayScore(score);
        
// =====>===>===> like this displayScore(score) we can do for other elements like for message, number.
        document.querySelector('body').style.
        backgroundColor='red';
        
    }
    else{
        document.querySelector('.message').textContent=
        "you lose the game";
        // document.querySelector('.score').textContent=0;
    displayScore(0);
    }
}

//when guess is too high
// else if(guess>secretNumber)
// { 
//     if(score>1){
//         document.querySelector('.message').textContent="too high";
//         score--;
//         document.querySelector('.score').textContent=score;
//         document.querySelector('body').style.
//         backgroundColor='red';    
//     }
//     else{
//         document.querySelector('.message').textContent=
//         "you lose the game";
//         document.querySelector('.score').textContent=0;
//     }
// }

// //when guess is too low
// else if(guess<secretNumber)
// {
//     if(score>1){
//         document.querySelector('.message').textContent="too low";
//         score--;
//         document.querySelector('.score').textContent=score;    
//         document.querySelector('body').style.
//         backgroundColor='red';
//     }
//     else{
//         document.querySelector('.message').textContent=
//         "you lose the game";
//         document.querySelector('.score').textContent=0;
//     }   
// }
});

//again button
document.querySelector('.again').addEventListener
('click', function() {
    
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;

    // document.querySelector('.score').textContent=score;
    displayScore(score);
    document.querySelector('body').style.
    backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.message').textContent="start guessing";
    document.querySelector('.guess').value='';
    document.querySelector('.number'). textContent='?';
    
});

