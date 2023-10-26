// how to programmatically create and fill arrays

// creating arrays

const arr=[1, 2, 3, 4, 5, 6];
console.log(new Array([1, 2, 3, 4, 5, 6]));


// generate arrays programmatically, so without having to define all the 
// items manually

//===>                      EMPTY ARRAYS + FILL() METHOD

const a=new Array(7);
console.log(a);

// here we think that the output is the array contain only 7 but no that's 
// wrong here the Array() contructor contain 7 empty elements. if we 
// give like here 7 then it gives us length of the array

// here we don't need to use map() method because it gives the same answer 
// that is before
console.log(a.map(() => 5));

// so in this we can't use any methods but their is only one method we can use which is 
// fill() method

// a.fill(2);
// console.log(a);

// the fill() method works like slice() method

// so here we can specify from where we want start the filling of elements


// so here we want to fill 1 in array but we want to start filling from
// 5th after
// a.fill(1, 3)
// console.log(a);

// here we can give end parameter also like in slice() method

a.fill(1, 2, 4)
console.log(a);

arr.fill(18, 3, 5)
console.log(arr);


// what if we wanted to recreate the array programatically

// so here we use from() method

// so here we don't ise from() as a method on an array. Instead we are 
// using it on the Array() constructor

const b = Array.from({length: 7}, () => 4);
console.log(b);

// so we don't need the first parameter so we use here underscore(_)
const c= Array.from({length:7}, (_, i) => i=i+1)
console.log(c);

const dice=Array.from({length:100}, (_, i) => Math.trunc(Math.random(1, 6)+i+1))
console.log(dice);

// this Array.from() function was initially introuced into JavaScript
// in order to crete arrays from array like structures(Strings, Maps, Sets etc)
// which is called iterables

// like Maps or Sets ano there is another example of an array like structure
// is the result of using querySelectorAll(). So querySelectorAll() returns
// something called a ""NodeList"" which is something like an array which
// contain all the selected elements but it's not a real array, and so it
// does not have methods like map(). so it does not have most of the array
// methods like map(), redeuce()

// if we want to use a real array method like that on a NodeList, we would 
// first need to convert the NodeList to an array and for that Array.from()
// is perfect


//                        BANKIST APP


// We used a Array.from() to create an array from the result of the 
// querySelectorAll() which is a NodeList, which is not really an array,
// but an array like structure and that array like structure
// can easily be converted to an array using Array.from().
// And then as a second step, we even included a mapping function,
// which then forms that initial array to an array exactly as we want it.
// So basically converting the raw element to its text content
// and replacing the Euro sign with nothing.

labelBalance.addEventListener('click', function(){
    const movementsUI= Array.from(
     document.querySelectorAll('.movements__value'),
     el=>Number(el.textContent.replace(str, '')) 
    );
    console.log(movementsUI);
  
  // OR
  
    // console.log(movementsUI.map(el => el.textContent.replace(str, '')));
  
  })
  
  // this is another way to do the same thing that we do above but then we 
  // have to do the mapping separately
  const movementsUI2=[...document.querySelectorAll('.movements__value')];
  console.log(movementsUI2);