// we can change style also using DOM (css manipulation)

let score=20;

const secretNumber=Math.trunc(Math.random()*20)+1;
document.querySelector('.number'). textContent=secretNumber;



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
    

    // here we want to change the colour of entire page 
    // so we have to select the whole body of html to 
    // chnage the style of css

    document.querySelector('body').style.
    backgroundColor='#60b347';

    document.querySelector('.number').style.width='30rem';
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
