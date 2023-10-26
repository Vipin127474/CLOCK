//  IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFE)

// sometimes in JS we need a function that is only executed once and then
// never again so basically a function that disappears right after it is
// called

// NORAML CALLING A FUNCTION
const runOnce=function() {
    console.log('this will never run again');
}
runOnce();



// IIFE

// here it shows uncaught syntaxerror: function statements require a 
// function name so. how can we fix this problem?

//we can trick JS into thinking that this function is just an 
// expression so we kept the whole function in parentheses

// here we don't need to call it 

// (function(){
//     console.log('this will never run again');
// })();

//"()" IMMEDIATELY CALL THE FUNCTION AND WE GET THIS TEXT LOGGED TO THE 
// CONSOLE HERE


// this is the "function value/ function expression" and then we immediately
// call it here with help of "()"

// (function(){
//     console.log('this will never run again');
// })()

// so this pattern is called "immediately involed function expression"

// ARROW FUNCTION
(() => console.log('this will never run again'))();

// function scope

// we know that functions create scopes. and what is important here is that
// a scope does not have access to variables from the inner scope

// so the inner scope(isPrivate) would have access to anything defined
// outside here in the global scope but the other way around the global 
// scope does not have access to anything that is inside of a scope
(function(){
    console.log('this will never run again');
    const isPriavate=23;
})();
// console.log(isPrivate);


// variables scope: in this let and const create their own scope inside a
// block but var can accessible
{
    const isPrivate=34;
    var notPrivate=45
}

console.log(notPrivate);
console.log(isPriavate);