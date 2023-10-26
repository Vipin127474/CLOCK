// when using '+' for concatenation
const firstName='Bob';
const job='coder';
const birthYear=2000;
const year=2035;
const bob = "I'm " + firstName +", a " +  (year-birthYear)
+ " years old " + job + "!";
console.log(bob);

// when using template literals for concatenation.
// here we use `` instead of "" or ''
const jonasNew=`I'm ${firstName}, a ${year-birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regualr string...`);

// const jonas=`hello`
// console.log(jonas);

// without use of template literals
console.log('String with \n\
multiple \n\
lines');

// with use of template literals
console.log(`String
multiple
lines`);