// function is a piece of code that we can reuse over again and again. 
// a variable can hold one value but function can hold one or more
// complete lines of code.
// it can also receive data and return the data back
// example1:
function logger() {
    console.log('my name is vipin');
}
// calling/ running /invoking a function.
logger();
logger();

function fruitProcessor(apples, grapes) {
    // console.log(apples, grapes); 
    const juice=`Juice with ${apples} apples and ${grapes} grapes.`;
    return juice;
}
const applesgrapesjuice=fruitProcessor(4, 5);
console.log(applesgrapesjuice);

// OR

console.log(fruitProcessor(2, 3));


// const applesgrapesjuice1=fruitProcessor(2,5)
// console.log(applesgrapesjuice1);

