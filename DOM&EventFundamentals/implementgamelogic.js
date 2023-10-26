// --->we define a secret number outside the eventHandler
// because we want to define the secret number once when 
// we start application.

// --->if we define it inside the eventHandler then the secret 
// number change on each click and we would get a new secret
// number

// -->random gives us number between 0 and 1 

let score=20;

const secretNumber=Math.trunc(Math.random()*20)+1;
document.querySelector('.number'). textContent=secretNumber;



document.querySelector('.check').addEventListener
('click', function (){

const guess=Number(document.querySelector('.guess'). value)
console.log(guess, typeof guess);

if(!guess)
{
    document.querySelector('.message').textContent='no number'
}

else if(guess===secretNumber)
{
    document.querySelector('.message').textContent="Correct number";
    
}

else if(guess>secretNumber)
{

    if(score>1){
    document.querySelector('.message').textContent="too high";
    score--;
    document.querySelector('.score').textContent=score;
}
else{
    document.querySelector('.message').textContent=
    "you lose the game";
    document.querySelector('.score').textContent=0;
}
}
else if(guess<secretNumber)
{
    
        if(score>1){
        document.querySelector('.message').textContent="too low";
        score--;
        document.querySelector('.score').textContent=score;
    }
    else{
        document.querySelector('.message').textContent=
        "you lose the game";
        document.querySelector('.score').textContent=0;
    }   
}
});
