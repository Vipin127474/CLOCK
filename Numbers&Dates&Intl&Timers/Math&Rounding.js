// MATH & ROUNDING

//                          square root

console.log(Math.sqrt(16));

// another way
console.log(16 **(1/2));

//                           cube roots
console.log(8 **(1/3));

//                              max

console.log(Math.max(12, 53, 45));

// max function here actually does type coersion so it gives us the 53
// again when it is string but it does not parsing

console.log(Math.max(12, '53', 45)); //type coersion
console.log(Math.max(12, '53X', 45)); // parsing

//                        min

// it works same like max
console.log(Math.min('12', 22, 45)); 


//                           PI
// area of circle

console.log(Math.PI * Number.parseFloat('10px') ** 2);

//                          random

console.log(Math.trunc(Math.random() * 6) + 1);
console.log(Math.trunc(Math.random() * 100) + 1);


// we can use above formula to always generate random integers between two
// values

// we use floor here because floor is better than trunc it will work with 
// -ve numbers effectively
const randomInt= (min, max) => Math.floor(Math.random() * (max-min) + 1) + min;

// here we have 0 and 1 and the range is b/w 0 to (max - min) then add
// the min on both(with (0) and with (max-min)) sides then cancel out the min we get the value b/w 
// min and max

//-->    0...1 -> 0 ....(max-min) -> min ...(max - min + min)
//-->    0...1 -> 0...(max-min) -> min ... max

console.log(randomInt(10, 200));


//                         Rounding Integer

console.log(Math.trunc('233.22')); //type coersion

// this is the another way of rounding of the value
console.log(Math.round(2.4));
console.log(Math.round('2.4')); //type coersion


//                      floor & ceil
// both will do type coersion
console.log(Math.ceil(54.3));
console.log(Math.ceil('54.3')); //tyoe coersion

console.log(Math.floor(32.7));
console.log(Math.floor('32.7')); //tyoe coersion


// we see here both trunc and floor method works same with positive number
console.log(Math.trunc(23.44));
console.log(Math.floor(23.44));

// in negative numbers

// the trunc gives the -23 but floor gives the -24 the floor method 
// works in every conditon so it is better way 

console.log(Math.trunc(-23.44));
console.log(Math.floor(-23.44));

//                      Rounding Decimals

// so toFixed returns the string and not a number
// the argument in toFixed here tell us the number of digits after Decimals

// so this here works in a similar way than the string methods, So 4.5 is a
// number, so it is a primtive and primtive actually do not have methods.
// and behind the scenes JS will transform this to a number object then call 
// the method in that object and then once the operation is finished it will
// convert it back to a primtive
console.log((4.5).toFixed(0));
console.log((4.535).toFixed(2));

// using + operator here it change into numbers
console.log(+(4.5).toFixed(0));
