// SOME AND EVERY METHOD


// So first look back to the INCLUDES METHOD

//EQUALITY
const movements=[110, 454, 676, 2322, 6767, 56, 4545];
console.log(movements);
console.log(movements.includes(676));

// so includes method gives us true if any value in the array 
// is equals to 676.


// this is testing for equality 

// but what if we wanted to test for a condition instead? 

// so that's where the SOME method works

// so some method can also work like includes method

// console.log(movements.some(mov => mov === 676));


// 1. SOME

//CONDITION

// so here we check that there is "(we can give this another name) any"
// deposit which is more than 10000
const anyDeposits = movements.some(mov => mov > 10000);
console.log(anyDeposits);


// 2. EVERY

// so every method works like some method but difference is the some 
// method gives true if all of the elements in the array satify the 
// condition
const account2={
    owner:'vikram batra',
    movements:[2005, 6500, 400, -100, 273, 1000, -170, -668,],
    interestRate:1.5, // %
    pin:2222,
};

console.log(movements.every(mov => mov > 0));
console.log(account2.movements.every(mov => mov > 0));



//SEPARATE CALLBACK

const deposit=mov => mov > 0;  // callback function

console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
console.log(movements.find(deposit));
console.log(movements.findIndex(deposit));

