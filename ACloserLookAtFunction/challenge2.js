//1. Take the IIFE below and at the end of the function, attach an event listener that
// changes the color of the selected h1 element ('header') to blue, each time
// the body element is clicked. Do not select the h1 element again!

// 2. And now explain to yourself (or someone around you) why this worked! Take all
// the time you need. Think about when exactly the callback function is executed,
// and what that means for the variables involved in this example


(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
document.querySelector('body').addEventListener('click', function(){
    header.style.color='blue';
})
})();


// how does the callback function here get access to the header variable? 
This happened here because of the closure. Closure is necessary or it's useful
because by the time this callback here is executed this IIFE so this 
immediately invoked function expression is now long gone so it has been
already executed and the variable(header) here is gone as well. So all of that 
is gone but still this callback function here is attached to the body element
adn so it's waiting for some events to happen there and when the event happens
then this function here is executed. Even though the environment in which
this callback function here was created is already gone it is still able to 
access the variables that were created in that variable by the time the function
was born. IIFE is the birthplace of event handler function here and then the 
function remembers all the variables present at the time of its birth. 
header is in the backpack of the callback function