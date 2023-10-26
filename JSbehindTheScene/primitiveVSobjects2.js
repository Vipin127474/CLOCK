'use strict';

// primitive

let lastName='Singh';
let oldLastName=lastName;
lastName='Rana';

console.log(lastName);
console.log(oldLastName);


// objects(reference value)

const sam={
    firstName:'sam',
    lastName:'williams',
    age:25,
};

// here changing value in marriedSam is reflect on sam

// this is because when we attempt to copy the original sam object,
// it did in fact not create a new object in the heap. so marriedSam
// is not a new object in the heap.  It's simply just another variable
// in the stack, which holds the reference of the original object. So,
// both of these two variables simply point to exactly the same memory
// address in the heap. And that's because in the stack, they both
// hold the same memory address reference.

const marriedSam=sam;
marriedSam.lastName='singh';

console.log(sam);
console.log(marriedSam);


// we can't assign here the complete different object to marriedSam
// because this new object will be stored at a different position
// in memory, and therefore the reference to that position in memory will
// have to change here in this variable(marriedSam). so that does not work.
// because that is in the stack and so, since it is a constant
// we cannot change that value in the stack. So, we cannot change
// the value to a new memory address, and therefore this does not work.

// marriedSam={}

// COPY OBJECTS 
//---> when we want to copy the object so that we could then change one of them
// without changing the other one

const Sam2={
    firstName:'sam',
    lastName:'williams',
    age:25,
};

// Object.assign():- it merge two objects and then return a new one.

// so this object(samCopy2) is now actually a true copy of the original
const samCopy= Object.assign({}, Sam2);
samCopy.lastName='singh';
console.log(Sam2);
console.log(samCopy);


// however there is still a problem because using this
// technique of Object.assign() only works on the first level
// or in other words, if we have an object inside the object,
// then this inner object will actually still be the same. So,
// it will still point to the same place in memory. And that's
// why we say that this Object.assign() only creates "shallow copy"
// and not a "deep clone" which is what we would like to have.

// a shallow copy will only copy the properties in the first level
// while a deep clone would copy everything.


// here Object.assign() not work because it is works on first level and here object is inside the object so here we have to use 
// deep clone BUT LATER IN COURSE
const Sam3={
    firstName:'sam',
    lastName:'williams',
    age:25,

// family(array) is a special type of object    
    family:['alice', 'bob'],
};

const samCopy2= Object.assign({}, Sam3);
samCopy2.lastName='singh';

// here we are manipulating the object that's within
// the object

samCopy2.family.push('john');
samCopy2.family.push('ram');

// in here both objects Sam3 and samCopy2 has same family member because again both points to the same memory in heap
// and if one is changed the other one also change.
// here the object.assign() failed
console.log(Sam3);
console.log(samCopy2);