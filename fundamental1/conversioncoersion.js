// there is type conversion and type coersion.

// type conversion when we manually convert the one type into another.

const inputYear='1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);


console.log(Number('Jonas'));// not a number(NaN)
console.log(typeof NaN);// invalid number
console.log(String(20), 23);


// we can only converts to boolean or to number but not strings because it is speacial case.
// we can only convert to boolean or to number or to string.
// we cannot convert to undefined or to null


// type coersion when javascript automatically convert one type into another behind the scene.

// here the plus operator converts the number into string 
console.log('I am ' + 23 + ' years old');

// this time javascript converts the string into number
console.log('23'-'10'-3);

// this time the javascript converts the number into string and concatenate it.
console.log('23'+'10'+3);

// the js converts the string into number and multiply them.
console.log('20'*'2');
// string into number
console.log('20'/'2');

// first the number is converts into string and it becomes 11.
let n='1'+ 1;
// then the string converts into number and subtract that.
n=n-1;
console.log(n);

