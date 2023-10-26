// FLAT & FLATMAP METHOD are array method
// introduce in ES2019

// 1. FLAT METHOD

// remove the nested array and flattend the array that's why it is called
// flat method

const arr=[[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());


// here the flat method only goes one level deep in nested array
// when flattening the array

const arrDeep=[[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());

// in this we give two as an argument in flat method when we want to 
// flattening 2 level deep nested array

const arrDeep1=[[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const account1={
    owner:'vipin singh',
    movements:[200, 600, 400, 5000, 270, -1000, -70, 644,],
    interestRate:1.5, // %
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

const account=[account1, account2, account3];


// NORMAL METHOD

// here we create new array which contains all the movements array from 
// all the account

const accountMovements=account.map(acc => acc.movements);
console.log(accountMovements);


// here we store all the accountMovements array in one array

const allMovements= accountMovements.flat()
console.log(allMovements);

// TOTAL BALANCE
const overallBalance=allMovements.reduce((acc, mov) => acc+mov, 0);
console.log(overallBalance);



// CHAINING METHOD

const chainMovements=account
.map(acc=>acc.movements)
.flat()
.reduce((acc, mov) => acc+mov, 0)

console.log(chainMovements);



// 2. FLATMAP
// so flatMap method combines both map method and flat method then gives the
// result, and it goes only one level deep in nested array

const chainMovements1=account
.flatMap(acc=>acc.movements)
.reduce((acc, mov) => acc+mov, 0)

console.log(chainMovements1);
