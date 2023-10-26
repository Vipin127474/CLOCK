// event=it is something that happens on the page
// like: a mouse click, key press.
// with event listener we can wait for a certain event
// to happen, then react on it


'use strict'
// we take here only check class from two classes 'btn check class'
// because if we take 'btn' class which is more generic then the
// event is work on other button element 'again'. but we want to work
// on only check button so we take check class only

// document.querySelector returns the element and now on that
// element we can the addEventListner method
// 'click' is name of event we want

// here we pass the event now we need to tell the event listener
// what to do. so bsically we need to specify the reaction
// to the click event


// event handler- we do that by defining a function. And that function will contain exactly the code
// that should be executed whenever this click event happens on the 'Check button' here.

// And that function is going to be called the event handler.

// we can't call the function in addEventListener anywhere
//this function call when event happens
// but this function is not call once the script here is 
// executed 
// in fundamental section when we get input from user 
// it usually always is a string. console.log(typeof guess);

document.querySelector('.check').addEventListener
('click', function (){


// it give the string but we want to compare a number     
//with number
// const guess=document.querySelector('.guess').value
// console.log(typeof guess);



const guess=Number(document.querySelector('.guess'). value)
console.log(guess, typeof guess);
if(!guess)
{
    document.querySelector('.message').textContent='no number'
}
});

