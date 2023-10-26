//                CONVERSION(CONVERTING AND CHECKING NUMBERS)

// IN JS ALL NUMBERS ARE PRESENTED INTERNALLY AS FLOATING POINT NUMBERS


console.log(23 ===23.000);  // INTENALLY FLOATING POINT NUMBER

// NUMBERS ARE REPRESENTED INTENALLY IN A 65 BASE 2 FORMAT SO THAT 
// MEANS NUMBERS ARE STORED IN BINARY FORM(0, 1)


// it is very hard to represent some fractions that are very easy to 
// represent in the base 10 system 

//---> base 10 - 0 to 9  1/10=0.1  3/10= 3.33333
//---> binary base 2 - 0, 1

// it expect the 0.3 as output but it gives us different result 0.300004
console.log(0.1 + 0.2);

// it should be correct the sum of 0.1 & 0.2 but this is simply an error in JS 
console.log(0.1 + 0.2 === 0.3);


// CONVERT STRING TO NUMBER
console.log(Number(6));

// another way to convert into Number from String

// in this when JS sees the "+" operator it will do type coercion
console.log(+'65');


//                          PARSING(STRING TO A NUMBER)
// So here Number is an object which is kind of function because every
// function is an object but it is also an object in the end 

console.log(Number(45) ); // function

//                 PARSEINT

// here it will give number 
console.log(Number.parseInt('40px'));  // object

// it is NaN
console.log(Number.parseInt('px3'));  // object

// parseInt also have 2nd argument known as "RADIX"  and RADIX is the 
// base of the numberal system that we are using. So here we are using
// base 10 number(0 to 9). it specifies the number system to use

console.log(Number.parseInt('40px', 10)); // 40
console.log(Number.parseInt('40px', 2)); //NaN

//             PARSEFLOAT

console.log(Number.parseFloat('40.78px', 10)); //NaN

// we can write like this but it is traditional way of writing like this
// but in modern JS it is more encouraged to call these functions on the 
// number object
console.log(parseFloat('12.01px', 10));

// SO the Number here provides something called 'namespace', so namespace
// for all these function like parseFloat and parseInt 

//                            isNaN

console.log(Number.isNaN(24));
console.log(Number.isNaN('24'));
console.log(Number.isNaN(+'24j'));

// this is not a good way to check it we have another way that is isFinite() 
console.log(Number.isNaN(454/0));

//                          isFinite

// checking if value is a number
console.log(Number.isFinite(22));
console.log(Number.isFinite('22'));
console.log(Number.isFinite(+'22'));
console.log(Number.isFinite(+'22c'));
console.log(Number.isFinite(22/0));

//                          isInteger

console.log(Number.isInteger(2));
console.log(Number.isInteger(2.00));
console.log(Number.isInteger(2.4));
console.log(Number.isInteger(23/0));
console.log(Number.isInteger('23'));