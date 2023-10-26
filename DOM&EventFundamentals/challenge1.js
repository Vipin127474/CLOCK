//----> score and secreNumber is state variable of the application  
'use strict'

let score=20;
let highscore=0;
const secretNumber=Math.trunc(Math.random()*20)+1;
// document.querySelector('.number'). textContent=secretNumber;



document.querySelector('.check').addEventListener
('click', function (){

const guess=Number(document.querySelector('.guess'). value)
// console.log(guess, typeof guess);


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
    
    
    // here we want to change the colour of entire page 
    // so we have to select the whole body of html to 
    // chnage the style of css
    
    document.querySelector('body').style.
    backgroundColor='#60b347';
    document.querySelector('.number').style.width='30rem';
 
    if (score>highscore) {  // 12>0
        highscore=score    // 12=12
    document.querySelector('.highscore'). textContent=highscore;
    }
}

//when guess is too high
else if(guess>secretNumber)
{
    
    if(score>1){
        document.querySelector('.message').textContent="too high";
        score--;
        document.querySelector('.score').textContent=score;
        
        document.querySelector('body').style.
        backgroundColor='red';
        
    }
    else{
        document.querySelector('.message').textContent=
        "you lose the game";
        document.querySelector('.score').textContent=0;
    }
    
    
}

//when guess is too low
else if(guess<secretNumber)
{
    
    if(score>1){
        document.querySelector('.message').textContent="too low";
        score--;
        document.querySelector('.score').textContent=score;
        
        
        document.querySelector('body').style.
        backgroundColor='red';
    }
    else{
        document.querySelector('.message').textContent=
        "you lose the game";
        document.querySelector('.score').textContent=0;
    }   
}
});

//again button
document.querySelector('.again').addEventListener
('click', function() {
    
    // const guess=Number(document.querySelector('.guess'). value)
    // console.log(guess, typeof guess);
    score=20;
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.
    backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.message').textContent="start guessing";
    document.querySelector('.guess').value='';
    document.querySelector('.number'). textContent='?';
    
});

