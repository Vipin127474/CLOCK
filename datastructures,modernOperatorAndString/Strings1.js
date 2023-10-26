// STRINGS: these are case sensitive and these are just primitives

const airline='AIR INDIA';
const plane='I098';

//1. retrieve characters one by one

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);

// when we want in number form from string
console.log(plane[0]);
console.log(Number(plane[1]));
console.log(Number(plane[2]));
console.log(Number(plane[3]));

// this is the another way of retrieve characters from STRINGS
console.log('B327' [0]);

//2. length property
console.log(airline.length);

// we can directly apply the length property on elements
console.log('B327'.length);


//STRING METHODS

// 1. indexOf(): it gives us the character which occur at first
console.log(plane.indexOf('0'));


// 2. lastIndexOf(): it gives us the character which occur at last
console.log(airline.lastIndexOf('A'));


console.log(airline.indexOf('INDIA'));

// 3. SLICES
// slice(4): 4 is beginning. gives us the information that the method extract elements after index 4 
console.log(airline.slice(4)); // INDIA


// slice(4, 7): 7 is ending. gives us the information about that the method extract elements 
// after index 4 and before index 7. So, it lying between the index 4 and index 7
console.log(airline.slice(4, 7)); // IND



//EX::: extract word without knowing any of the indexes 

// we can use indexOf() and lastIndexOf() here effectively
console.log(airline.slice(0,airline.indexOf(' ')));

// without + 1 it counts space and show it in the result  
console.log(airline.slice(airline.lastIndexOf(' ')+ 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));


const checkMiddleSear= function(seat) {
// B and E are middle seats in small aeroplane
const s=seat.slice(-1);
if(s==='B' || s==='E')
{
    console.log('YOU GOT THE MIDDLE SEAT');
}
else{
    console.log('YOU GOT WINDOW SEAT');
}
}

checkMiddleSear('11B');
checkMiddleSear('23C');
checkMiddleSear('3E');

//QUESTION 1. So we know that strings are just primitives.So why do they have methods?


// Shouldn't methods only be available on objects such as a race? Well that is actually true.
// However, JavaScript is really smart. And so here is how this works.
// Whenever we call a method on a string, JavaScript will automatically behind the scenes
// convert that string primitive to a string object with the same content.
// And then it's on that object where the methods are called.
// All right and this process is called BOXING because it basically takes our string
// and puts it into a BOX which is the object.

// EXAMPLE:


// So basically what happens is this. So what JavaScript does,
// is to call this string function here. And so now you'll see, that this string here,
// looks a little bit more like an object. And we could take a look at this here.
// But what matters is that it's actually a OBJECT now. So you see it is an object.
// And so this conversion here is what JavaScript does behind the scenes
// whenever we call a method on a string. And then when the operation is done
// the object is converted back to a regular string primitive.

// And in fact all string methods return primitives. Even if called on a string object.

console.log(new String('vipin'));
console.log(typeof new String('vipin')); // shows data type = OBJECT
console.log(typeof new String('vipin').slice(1)); // shows data type = STRING