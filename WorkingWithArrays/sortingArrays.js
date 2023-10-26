// SORT METHOD

//STRINGS
const  owners = ['jonas', 'sam', 'rohan', 'mohit'];
console.log(owners.sort());

// it mutates original array
console.log(owners);


// Numbers
const numbers=[40, -149, 6444, 7999, -99, 336, -20, 566]
console.log(numbers.sort());

// now they are sort according to STRINGS 
// we need to fix this 


// return < 0, A, B (descending)(keep order)
// return > 0, B, A(ascending)(switch order)

// ASCENDING ORDER

numbers.sort((a, b) => {
if(a > b){
    // so here if a >0 then we need to return something positive
    return 1;
}
if(b > a){
    // so here if a < 0 then we need to return something negative
return -1
}
});

console.log(numbers);

//                            OR

// so here if a > 0 then it will give +ve value
// and if a < 0 then it will give -ve value
numbers.sort((a,b) => a-b);
console.log(numbers);


// DESCENDING ORDER

numbers.sort((a, b) => {
    if(a > b){
        // so here if a >0 then we need to return something positive
        return -1;
    }
    if(b > a){
        // so here if a < 0 then we need to return something negative
    return 1
    }
    });
console.log(numbers);


//                         OR

numbers.sort((a,b) => b-a);  //here we return but we use arrow function 
                            // that's why we not write return here
console.log(numbers);



// so here the array sorted now becuase the SORT METHOD keeps looping over
// the array and applying this callback function here until everything is 
// in an ascending order according to the rules we establish here


// a= -149, b= -99
// return < 0, then A will be sorted before B

// return > 0, then B will be sorted before A

// if we want to sort these two in an ascending order, then we need to
// switch them so we want here B then A



 