// destructing arrays: so destructing is an ESX feature
// and it is basically a way of unpacking values from an 
// array or an object into separate variables

// so in other words destructing is to break a complex data 
// structure down into a smaller data structure like a variable.

// so for arrays we use destructing to retrieve elements from the array
// and store them into variables in a very easy way. 


'use strict';

const restaurent={
    name:'Bukhara',
    location:'ITC Maurya, New Delhi- LEED Platinum luxury hotel | Diplomatic Enclave',
    categories:['vegetarian', 'pizzeria', 'indian thali'],
  starterMenu:['sandwich', 'bread omelette', 'burger'],
    mainMenu:['indian thali', 'butter chicken', 'dal rice'],
     order:function(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }

  };

// this is how we retrieve all these three elements in an array
const arr=[2,5,3];
const a=arr[0];
const b=arr[1];
const c=arr[2];


// but now with destructing we can decalre all these three 
// variables at the same time

// destructing array here from right side
const [x, y, z]=arr;
console.log(x, y, z);

// destructing does not affect arr
console.log(arr);


// if you want to retrieve 3rd element from an array you have
// to leave space between two variable with commas so it
// skip the 2nd element
let [primary, ,secondary]=restaurent.categories;
console.log(primary, secondary);


//Switching variables

// when we want to switch but without destructing
// let temp = primary;
// primary = secondary;
// secondary = temp;
// console.log(primary, secondary);



// when we use destructing for switching the elements 
[primary, secondary]=[secondary, primary];
console.log(primary, secondary);


// receive two return values from a function

// 1.  simple function call 
// console.log(restaurent.order(1,0));

//2. destructor function call
 const [starterCourse, mainCourse]= restaurent.order(1,0);
console.log(starterCourse, mainCourse);


// retrieve nested array

const nested=[2, 4, 1, [9,6]];
 
//  const e=nested[3][0];
//  console.log(e);

// const [f, g, h, i]=nested;

// console.log(f, g, h, i);

// but if we want to retrieve individual values then what
// we do

// then we use nested destructing here [i, j] nested inside
// const[f,g,h,[i, j]] destructor
const[f, g, h, [i, j]]=nested;
console.log(f,g,h,i);


// set default values
// when we don't know the length of an array then we set default 
// values so it does not show undefined and take default value when 
// element is not defined

// const[p, q, r]=[9,5]; // undefined at position r

const[p=1, q=1, r=1]=[5];
console.log(p, q, r);


