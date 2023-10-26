//  <---------------  BIGINT --------------------->

// ANOTHER PRIMITIVE DATATYPES

// THE NUMBERS ARE REPRESENTED INTERNALLY AS 64 BITS AND THAT MEANS THAT 
// THERE ARE EXACTLY 64 ONES OR ZEROES TO REPRESEN ANY GIVEN NUMBER

// NOW OF THESE 64 BITS ONLY 53 ARE USED TO ACTUALLY STORE THE DIGITS 
// THEMSELVES. THE REST ARE FOR STORING THE POSITION OF THE DECIMAL
// POINT AND THE SIGN 

// IF THERE ARE ONLY 53 BITS TO STORE THE NUMBER, THAT MEANS THAT THERE IS 
// LIMIT OF HOW BIG NUMBERS CAN BE, SO LETS CHECK IT

// so here -1 is used becuase the number starts from 0. And 2 is for the 
// base which has only zeroes and ones
console.log(2 ** 53 - 1);

// IT IS THE ANOTHER WAY TO MESAURE THE VALUE, SO THIS IS THE LIMIT OF 
// THE NUMBER. THE LIMIT LARGER THAN THIS IS NOT SAFE
console.log(Number.MAX_SAFE_INTEGER);

// HERE WE INCREASE THE VALUE THEN IT DOES NOT GIVE THE ACCURATE VALUE 
console.log(2 ** 53 + 10); // GIVE INACCURATE VALUE
console.log(2 ** 53 + 0); // GIVE INACCURATE VALUE
console.log(2 ** 53 + 7); // GIVE INACCURATE VALUE


// BIGINT IS USED TO STORE A NUMBER LARGER THAN THE ABOVE ONES. IT STORES
// THE VALUE NO MATTER HOW BIG IT IS


// using 'n' in the end we can see the whole number that 
console.log(56789456789567896578965789678956789n);

// it gives the different than the above one so this constructor function
// should probably only be used with small numbers
console.log(BigInt(56789456789567896578965789678956789));
console.log(BigInt(5678945678956789));


// OPERATIONS

console.log(10000n + 10000n);
console.log(10008934893499490340n * 104545454344353453453454343543534534000n);

// it is not possible to mix BigInt with regualr numbers
// console.log(10008934893499490340 * 104545454344353453453454343543534534000n);


const Big=5543543543534543534534543n;
const num=342;
console.log(Big /BigInt(num));


//                      THERE ARE TWO EXCEPION IN THIS:

//1. COMPARISION OPERATOR

// in this it is possible to mix BigInt with other datatypes
console.log(29n > 33);
console.log(234345435n <= 333244333);

// it is false becuase JS when we use the triple OPERATOR does not do 
// type coersion  (23n is a BigInt and 23 is a regular number)
console.log(23n === 23);

// these both are true becuase double operator do type coersion
console.log(23n == 23);
console.log(23n == '23');

//2. THE '+' OPERATOR WHEN WORKING WITH 

// Addition (+) involving a string and a BigInt returns a string.
console.log(Big + ' is really HUGE');

//3. DIVISIONS
// IT GIVES US THE CLOSEST BIGINT AFTER DIVISION
console.log(54n / 5n);

// THE REGULAR NUMBER
console.log(54 / 5);


// the Math operations are not work here

// console.log(Math.sqrt(2n));
