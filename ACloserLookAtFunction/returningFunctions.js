// FUNCTION RETURNING FUNCTIONS
 
// THIS IS OPPOSITE OF PREVIOUS LECTURE (CALLBACK FUNCTIONS)

const greet= function(greeting) {
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}


const greeterHey=greet('hey');
greeterHey('vipin')
greeterHey('rohan')

// the "greeterHey" is the "function(name)"

// here function working like this beacuse of the "CLOSURE". And "CLOSURE" comes 
// at the end of this session


// our first function a greet returned a new function that we stores into this 
// variable(greeterHey). so this variable(greeterHey) is now just a function
// that we can call as we did here again using the parenthesis syntax.


// we can call the function like this also
greet('hello')('vipin');


                 // USE OF RETURNING FUNCTIONS
// function returning function is useful for programming paradigm called 
// functional programming.

        


//         challenge that upper code write in arrow function


           // this is mix of arrow function and traditinal function
const greet1 = greeting1 => function(name1){
    console.log(`${greeting1} ${name1}`);
}

greet('hey')('rohan')

            // this is example of pure arrow function
// here we don't need to write return and curly braces because it is one 
// line of code
const greet2 = greeting1 => name1 =>  console.log(`${greeting1} ${name1}`);
greet2('hi')('sourav')