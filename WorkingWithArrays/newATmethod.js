// AT() METHOD

//                                   1. ARRAYS

const arr=[87, 56, 64];

// bracket notation
console.log(arr[0]);

// at method
console.log(arr.at(0));


// these are the two ways to getting the last element in array

console.log(arr[arr.length-1]);

// slice method also used for accessing the elements
console.log(arr.slice(-1));

// it give now element in square brackets but if we want the value, 
// then we need to take out that first value by doing square brackets
// zero.
console.log(arr.slice(-1)[0]);


// we can use it anywhere but specially use it when we want the elements
// from last of array
console.log(arr.at(-1));


                                        //2. STRINGS
console.log(`vipin`.at(-3));
console.log(`vipin`.at(-1));