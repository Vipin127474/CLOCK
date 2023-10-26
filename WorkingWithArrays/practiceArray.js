// PRACTICE SESSION

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

const accounts=[account1, account2, account3];

// 1.
// we want to take out all the movements array from object add them 
const bankDepositSum=accounts
.flatMap(acc => acc.movements)
// .filter(mov => mov > 0)
.reduce((acc, mov) => acc+mov, 0)

console.log(bankDepositSum);

// 2.
// we want to count how many deposits there have been

const numDeposits1000 = accounts.flatMap(acc => acc.movements)
.filter(mov => mov >= 1000).length;

console.log(numDeposits1000);

//                            OR
console.log(accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000));

const numDeposits1000One = accounts.flatMap(acc => acc.movements)
.reduce((count, mov) => mov >= 1000 ? count+1 : count ,0);

console.log(numDeposits1000One);

// COUNT ++ DOES NOT WORK HERE
// const numDeposits1000One = accounts.flatMap(acc => acc.movements)
// .reduce((count, mov) => mov >= 1000 ? count++ : count ,0);


// here ++COUNT DO ITS JOB
// const numDeposits1000One = accounts.flatMap(acc => acc.movements)
// .reduce((count, mov) => mov >= 1000 ? ++count : count ,0);

let a=10;

// here the ++ operator does increment the value but it still returns the 
// previous value

// so the ++ operator do its job but when we console it will still returns
// the old value which is 10
console.log(a++);

// the pre increment operator do its job and show the incremented value
console.log(++a);
console.log(a);


// 3.

// advance case of reduce method
// in this example we create a new object instead of just a number or string

const sums= accounts.flatMap(acc=>acc
.movements)
.reduce((sum, mov) => {
mov > 0 ? sum.deposits += mov : sum.withdrawl +=mov;
return sum;
}, {deposits : 0, withdrawl: 0})
console.log(sums);

//                    OR

// here we destruct the deposits and withdrawl
const {deposits, withdrawl}= accounts.flatMap(acc=>acc
    .movements)
    .reduce((sum, mov) => {
    // mov > 0 ? sum.deposits += mov : sum.withdrawl +=mov;
    
    //                OR 
    
    sum[mov > 0 ? 'deposits' : 'withdrawl'] += mov;

    return sum;
    }, {deposits : 0, withdrawl: 0})

    console.log(deposits, withdrawl);

// so here for "sum" paramter in reduce() we create an object which is inital 
// value of "sum" (deposits: 0, withdrawl:0) 


// 4.

// create a simple function to convert any string to a title case(means that all
// the words in a sentence are capitalized except for some of them)

// this world is beatiful => This World is Beautiful

const covertTitleCase= function(title) {

    const capitalize=str => str[0].toUpperCase() + str.slice(1)
    const exceptions=['is', 'humans', 'not', 'but'];
    const titleCase = title.toLowerCase().split(' ')
    .map(word =>exceptions.includes(word) ? word : capitalize(word)).join(' ');
    return capitalize(titleCase)
}

console.log(covertTitleCase('this world is beatiful'));
console.log(covertTitleCase('this world is BEAUTIFUL but humans are not'));
