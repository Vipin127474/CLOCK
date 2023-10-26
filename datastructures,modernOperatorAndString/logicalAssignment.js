// LOGICAL ASSIGMENT OPERATOR

'use strict';

const rest1={
    name:'lalit hotel',
noOFguests:100,

// if we set noOFguests:0 then the OR ASSIGMENT OPERATOR returns
// the 50 in rest1.noOFguests that we don't expect

// OR ASSIGMENT OPERATOR give 50 because the 0 is falsy value 
// according to the program

// we want that value automaically 0 when noOFguests:0
// noOFguests:0,


}

const rest2={
    name:'taj hotel',
owner:'ambani',
}
// we want to here set a default noOFguests for all the 
// restaurent object that do not have that property


// SHORT CIRCUITING OPERATOR
// rest1.noOFguests=rest1.noOFguests || 50;
// rest2.noOFguests=rest2.noOFguests || 50;


// OR ASSIGMENT OPERATOR
// The logical OR assignment (x ||= y) operator only assigns if x is falsy.
// rest1.noOFguests ||= 50;
// rest2.noOFguests ||= 30;

// NULLISH ASSIGNMENT OPERATOR (NULL and UNDEFINED)
// when noOFguests=0;
rest1.noOFguests ??= 50;
rest2.noOFguests ??= 30;
// in rest2 the noOFguests of guests is UNDEFINED because
// it is not defined in object so it will give 30

console.log(rest1);
console.log(rest2);





//AND SHORT CIRCUITING
// rest1.owner=rest1.owner && '<ANONYMOUS>'; // undefined
// rest2.owner=rest2.owner && '<ANONYMOUS>';

// that we want to anonymize the names of the restaurent
// owners. when there currently is an owner, we want to basically
// replace this string here with the string anonymous

// AND ASSIGMENT OPERATOR

// The logical AND assignment (x &&= y) operator only assigns if x is truthy.
rest1.owner &&= '<ANONYMOUS>'; // nothing happend it exactly same as before
rest2.owner &&= '<ANONYMOUS>'; //<ANONYMOUS> means nameless
console.log(rest1);
console.log(rest2);
