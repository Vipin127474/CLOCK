//(Object) Dot vs. Bracket Notation
const vipin={
    firstName: 'vipin',
    lastName: 'singh',
    age: 2023-2002,
    job: 'teacher',
    friends: ['sam', 'Peter', 'rohit']
};
console.log(vipin);

// two way of getting a property from object
// 1.dot Notation

console.log(vipin.lastName);

// 2. Bracket Notation
console.log(vipin['friends']);


// this is another way in bracket Notation to getting a 
// property from object
const nameKey= 'Name';
console.log(vipin['first' + nameKey]);
console.log(vipin['last' + nameKey]);

// but this is not work in dot Notation
// console.log(vipin.'last' + nameKey);


// const interestedIn = prompt("What do you want to know about vipin? Choose between firstName and lastName, age, job and friends");
// // console.log(interestedIn);

// if(vipin[interestedIn])
// {
//     console.log(vipin[interestedIn]);
// }
// else{
// console.log("not exist in this object");
// }



// add new property to the object
vipin.location='India';
vipin['email']='theenderbeast71@gamil.com';
console.log(vipin);


// challenge
// `vipin has 3 friends , and his best friend is called sam.`

const hello=`${vipin.firstName} has ${vipin.friends.length} friends, and his best friend is called ${vipin.friends[0]}`
console.log(hello);