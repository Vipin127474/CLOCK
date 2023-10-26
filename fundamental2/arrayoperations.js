// js has some built in function that we can apply directly 
// on arrays and these are called methods. 
// we can think methoda as array operations.(array methods)

// methods/funtion

// 1. push- it adds elements to the end of an array.
// it returns the length of an array
const friends=['sam', 'rohan', 'rohit'];
const newLength=friends.push('jay');
console.log(friends);
console.log(newLength);


// 2.unshift- it adds the element at the beginning of array
// it returns the length of an array
friends.unshift('john');
console.log(friends);


// 3.pop- it remove the last elements from an array
// it returns the removed element
friends.pop();
const popped=friends.pop();
console.log(popped);
console.log(friends);

//4.shift- it remove the first element
// it returns the removed element
friends.shift();
console.log(friends);

//5.indexOf- it tell us index of value
console.log(friends.indexOf('rohan'));

// when bob is not present in array
console.log(friends.indexOf('riti'));// -1

// 6.includes- that gives true or false when value is present or not
console.log(friends.includes('raunak'));
console.log(friends.includes('sam'));

friends.push(30);
console.log(friends.includes(30));

//it takes value strictly so it is not type coersion
// console.log(friends.includes('30'));


// we can use includes in conditional
if(friends.includes('sam'))
{
    console.log('you have a friend called sam');
}
else
{
    console.log('you do not have friend called sam');
}