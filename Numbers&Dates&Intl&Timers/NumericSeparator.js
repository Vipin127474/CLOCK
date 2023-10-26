// NUMERIC SEPARATOR

// numeric separator to format numbers in a way that is easier for us, or 
// for other developers to read and to understand. means JS use underscore
// as a separator in large numeric value which is hard to understand

const diameter= 24_450_000_000_000;
// here 000 as thousand
console.log(diameter);


const priceCents= 323_422_33;

// here 33 as cents
console.log(priceCents);

const transferFee1=13_00;
// so here the 00 means 0 cent

// here the meaning is change
const transferFee2=1_800;
// here this means one thousand eight hundred


// underscore in the beginning and end does not allowed 
const PI = 3.14_15;
console.log(PI);

// we can convert number from string like this 
console.log(+'24343434');

// we can't convert number from string when we use underscore
console.log(+'222_44_44');

// when we parse the number then we get only 222 after that everything will
// be ignored
console.log(parseInt('222_44_44'));
