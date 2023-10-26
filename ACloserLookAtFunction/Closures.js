// a closure is not a feature that we explicitly use so we don't create 
// closures manually like a new array or a new function so closure happens
// automatically in certain situations we just need to recognize those 
// situations.

const secureBooking=function() {
let passengerCount=0;

return function(){
    passengerCount++;
    console.log(`${passengerCount} passengers`);
}
}

const secureBooker=secureBooking();
secureBooker();

console.dir(secureBooker); //output: CLOSURE COMING FROM secureBooking()


// In Output there is [[S 
// A function(secureBooker) has access to the variable environment(passengerCount) 
// of the execution context(secureBooking) in which it was created.
// so in a sense the scope chain is actually preserved through the 
// closure even when a scope has already been destroyed because its execution
// context(secureBooking) is gone. this means that even though the execution context(secureBooking) has 
// actually been destroyed the variable environment(passengerCount) shomehow keeps living
// somewhere in the engine

// now we can say that the secureBooker() function closed over its parent scope
// or over its parent variable environment(passengerCount) and this includes all function
// arguments even though in this example we don't have any. And now this 
// attached or closed over variable environment(passengerCount) stays with the function
// forever it will carry it around and be able to use it forever 

// using "closure" function(secureBooker) does not lose connection to variables that existed
// at the birthpalce of the function

// Closure:variable environment of the function, exactly as it was at the 
// time and place the function was created

// so the function(booker()) attempts to increase the passengerCount variable
// however this variable not in the current scope and so JS immediately look
// into the "closure" and see if it can find the variable there and it does
// this even before looking at the scope chain.

// if there was a global passengerCount variable set to 10 it would still first
// use the one(1) in the closure so the closure basically has  priority over scope
// chain

//                      different definition of closure

//1. A closure is the closed over variable environment of the execution context in 
// which a function was created, even after that execution context is gone.


// 2. A closure gives a function access to all the variables of its parent function,
// even after that parent function has returned. the function keeps a 
// reference to its outer scope, which preserves the scope chain throughout
// time


// 3. A closure makes sure that a function(secureBooker) does not loose connection to 
// variables(passengerCount) that existed at the function's birth place(secureBooking).

//                     EXAMPLE:

// function=boy
// closure=backpack
// variables=things in the bag

// A closure is like a backpack that a function carries around wherever it 
// goes. This backpackhas all the variables that were present in the 
// environment where the function was created. 

// Then whenever a variable(things in the bag) can't be found in function scope JS will look 
// into the backpack(closure) and take the missing variable from there


// we do NOT have to manually create closures, this is a JS feature that happens
// automatically. We can't evem access closed-over variable explicitly. A 
// closure is NOT a tangible JS object



// Closure is environment variable of secureBooking()