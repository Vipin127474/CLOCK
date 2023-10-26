// value is either object or primitves
// primitves-: value is primitve wheb it's not an object
// 7 primitve data types

// 1. number
let age=30;
let num=12.2;
console.log(age);
console.log(num);

console.log(typeof 30);

// don't put the let at beginning of variable when you want to change the value of variable
age=40;
console.log(age);


// 2. string
 let firstname="jonas";
 console.log(firstname);
 
 //  3. boolean
 let fullage=true;
 console.log(fullage);

 //  typeof is a operator that the type of value
 console.log(typeof true);

// 4. undefined(value taken by a variable that is not ye defined('empty value'))
let children;
console.log(children);

// 5.Null
// also empty value
console.log(typeof null);
// 6. symbol(ES2015)
// value that is unique and cannot be changed

// 7. BigInt(ES2020)
// larger integers tahn the Number type can hold

