// FIRST-CLASS AND HIGHER-ORDER FUNCTION

            // first class function

// javascript treats functions as first class citizens
// this means that function are simply values
// functions are just another type of object
                                          | 
why does JavaScript work this way?        |
                                         \|/
// Well, it's simply because functions        
// are really just another type of objects in JavaScript.
// And since objects are values, functions are values too.
// And since functions are values, there is a bunch of interesting things
// that we can do with them, like storing them in variables or object properties.

//1. store function in variables or properties
// 1.1.
const add= (a,b)=> a+b; //function expression

// 1.2.
const counter={  //object
    value :23, inc: function() {
    this.value++;
    }
}

//2. pass function as argument to OTHER functions:
const greet = () => console.log('hey vipin');
btnClose.addEventListener('click', greet);

// here greet pass as argument to btnClose.addEventListener()
// function 

//---> returns function FROM functions

// 3. call methods on functions
counter.inc.bind(someOtherObject);



           // Higher order function

// a function that recieves another functions an argument,
// that returns a new function, or both

// this is only possible because of first class function

//1. function that recieves another function

const greet = () => console.log('hey vipin');
btnClose.addEventListener('click', greet);

here addEventListener is a:: HIGHER ORDER FUNCTION
greet is a: Callback function

addEventListener is a Higher order function because it
recieves another function as an input and in this case greet
functions. usually that we say that the function that is 
passed in is a Callback function. That is because the Callback
function will be called later by the higher order function.

in this case the addEventListener will call the greet Callback later 
as soon as the click event happens.

 it is like the greet saying, hey there, "do not greet me yet, but call me 
 back once you are ready."
  

 //2. function that returns new function/ another function

 function count() {
     let counter=9;
     return function(){
         counter++;
     }
 }

//  here function count() is higher order function


// difference

first class function is just a features that a progamming language 
either has or does no have. all it means is that all function are 
values

 there are no first class functions in practice. it is just a concept.

there are however higher order functions in practice, which are possible
becuase the language supports the first class function 