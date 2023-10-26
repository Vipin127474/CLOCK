// Data structure==> Arrays, objects
// 1. Arrays
// array in which we can store multiple values
//primitive values are immutable.
// but the array is not primitive value so we can add the new value in an array(mutable).
const friend1 ='sam';
const friend2 ='piyush';
const friend3 ='tom';


const friends=['sam', 'piyush', 'tom'];
console.log(friends);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

// it tell us number of element in array
console.log(friends.length);


// other way of getting a element form the array
console.log(friends[friends.length-1]);


// we can't change whole array
// friends=['bob', 'alex', 'john'];
// console.log(friends);



// for replacing the old value with new value
friends[2]='rohan';
console.log(friends);

// to create a array with different way using array() funtion
const years= new Array(1991, 2002, 2012, 2020);

const firstName='vipin'
const vipin = [firstName, 'singh', 2023-2002,
'teaher' , friends];
console.log(vipin);
console.log(vipin.length);


// exercise
const calcAge=function(birthYear) {
    return 2037-birthYear;
}

const years1=[1990, 2002, 2008, 2017, 2023];
// calcAge(years1);
// console.log(calcAge(years1));//NaN(not a number)
const age1=calcAge(years1[4]);
const age2=calcAge(years1[2]);
const age3=calcAge(years1[0]);
const age4=calcAge(years1[years1.length-2]);
console.log(age1, age2, age3, age4);


const ages = [calcAge(years1[4]), calcAge(years1[2]),
    calcAge(years1[years1.length-2])];
        console.log(ages);