'use strict';


function calcAge(birthYear) {  //top level code
    const age=2034-birthYear;

    // function scope
function printAge() {
    let output=`${firstName} is ${age} years old , born in ${birthYear}`;
    console.log(output);


    // block scope
if(birthYear>=1991 && birthYear<=2003) 
{   
    var millenial=true;
// console.log(lastName);
    // here we take the firstName so we can check the block scope will take which value of firstName. so, the block scope take its own 
    // firstName variable value becuase it found the firstName in its scope. so this scope don't take the value from global scope or 
    // parent scope
    
    //there can be a multiple variable and function with same name but they exist in different scope.
   
    // creating new variable with same name as outer scope's
    // variable
    // const lastName='vipin'
    const firstName='singh'
    
    // now we reassign the value to parent scope(printAge) and define it in inner scope (if condtion)
    // reassigning outer scope's variable
    output='hello'; 
    const str=`oh, and you are a millenial,
    ${firstName}`;
console.log(str);

// now we check that the function scope is a block scope in older ES6 or not
function add(a,b) {
    const c=a+b;
    return c;
}

}

// we get the output because we actually manipulated an existing variable here inside of a inner scope (if condtion) 
console.log(output);
// console.log(str); // reference error: str is not defined

// the add function not working when the strict mode is on
// console.log('addition of two number is: ',add(6, 6));
console.log(millenial);
}
printAge();

    return age; 
}


const firstName='vipin';  // top level code
calcAge(2002);
// console.log(age);    // reference error
// printAge();         // reference error



