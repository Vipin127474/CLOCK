// FIND METHOD RETRIEVE ONE ELEMENT OF AN ARRAY BASED ON A CONDITION


const movements=[1000, 450, -349, 434, 394, -453];
const firstWithdrawl=movements.find(mov => mov<0);
console.log(firstWithdrawl);

//                       OR

// const first=movements.find(function(mov) {
//     if(mov<0)
//     return mov;
// });
// console.log(first);

// it works like filter method. Unlike the filter method, the FIND METHOD
// will actually not return a new array but it will only return the first 
// element the array that satisfies the condition. So in other words the first
// element in the array for which for the operation here becomes true

// DIFFERENCE BETEWEEN FILTER METHOD & FIND METHOD

// 1. FILTER METHOD RETURNS ALL THE ELEMENTS THAT MATCH THE CONDITION WHILE THE 
// FIND METHOD ONLY RETURNS THE FIRST ELEMENT.

// 2.THE FILTER METHOD RETURNS A NEW ARRAY WHILE FIND METHOD ONLY RETURNS THE
// ELEMENTS ITSELF AND NOT AN ARRAY

const account1={
    owner:'vipin singh',
    movements:[200, 600, 400, -500, 270, -1000, -70, 644,],
    interestRate:1.2, // %
    pin:1111,
};

const account2={
    owner:'vikram batra',
    movements:[2005, 6500, 400, -100, 273, 1000, -170, -668,],
    interestRate:1.5, // %
    pin:2222,
};

const account3={
    owner:'sandeep unnikrishna',
    movements:[7402, 6010, 900, -500, -2970, 15000, 710, 244,],
    interestRate:1.2, // %
    pin:3333,
};

const accounts=[account1, account2, account3];

console.log(accounts);

const account=accounts.find(function(acco) {
    if(acco.owner==='vipin singh')
   return acco;
});

console.log(account);



