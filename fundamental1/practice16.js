// CONDITIONAL OPERATOR(TERNARY OPERATOR)
// condition ? if part : else part

const age=15;
// age>=18 ? console.log('I like to drink wine') : 
// console.log('I like to drink water');

// example2
const drink = age>=18 ? 'wine' : 'water';
console.log(drink);

// in if else condition
let drink2;
if(age>=18)
{
drink2='wine';
console.log(drink2);
}
else{
    drink2='water';
    console.log(drink2);
}


// THE CONDITION DOES NOT WORK 
// javascript know that this is statements and statements don't
// make sense(if condition) 

// javascript expects an experesion

// console.log(`I'm ${2023-2000} years old ${if (23 > 10)
//     {
//     const str="23 is bigger";
// }}`)


// but this condition work in TERNARY OPERATOR because TERNARY OPERATOR is an expression
console.log(`I like to drink ${age>=18 ? 'wine' : 'water'}`);