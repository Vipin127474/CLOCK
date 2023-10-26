// methods are simply functions what we can call on objects. So if we have array
// methods then arrays themseleves are also objects. so these array methods are 
// simply functions that are attached to all arrays.

let arr=['a', 'b', 'c', 'd', 'e'];

//1. slice: we can extract part or element of any array, but without changing
// the original array. instead of it returns new array 

console.log(arr.slice(3));
console.log(arr);

console.log(arr.slice(1,4));
console.log(arr.slice(-2));
console.log(arr.slice(1,-2));

// shallow copy or original array
console.log(arr.slice());
//spread method
console.log([...arr]);


//QUESTION should we use the spread operator or slice method in order to create a 
// shallow copy of original array?
// we need to use slice when we want to chain multiple methods together


// 2.Splice: it works same as slice method the differnce is it does 
// actually change the original array

// console.log(arr.splice(3));
// console.log(arr);


// to deleting the element using Splice method

// here the 2 parameter is the number of elements that we want to delete
arr.splice(-1);
console.log(arr);
arr.splice(1,3);
console.log(arr);

// 3.Reverse: it reverse the array. it does actually mutate the original 
// array

arr=['a', 'b', 'c', 'd', 'e'];

const arr2=['z', 'y', 'x', 'w', 'v'];
console.log(arr2.reverse());
console.log(arr2);

// 4.Concat: it joins two methods in new array. it also does not mutate 
// any of the involved arrays

const letters=arr2.concat(arr);
console.log(letters);
// using spread operator we can also do concat array
console.log(...arr, ...arr2);


// 5.join 
console.log(letters.join(' - '));