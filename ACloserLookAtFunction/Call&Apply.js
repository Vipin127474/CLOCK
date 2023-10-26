// THE CALL AND APPLY METHODS

// In this lecture we gonna go back to 'THIS' keyword. In this we learn
// how we can set the 'THIS' keyword manually




// 1 airline

const Emirates={
    airline: 'Emirates',
    iataCode: 'EM',
    bookings: [],
    // book:function(){}
    book(flightNum, name){   // new way of function call
console.log(`${name} booked a seat on ${this.airline} 
flight ${this.iataCode}${flightNum}`);

this.bookings.push(
    {flight:`${this.iataCode}${flightNum}`, name}
    );
    },
};

Emirates.book(245, 'vipin singh');
Emirates.book(246, 'Rohan sharma');
// 'This' keyword here points to the Emirates object itself because that 
// is the object on which the book method here was called



           // 2 airline

//After some years Emirates airline create a new airline
const AirIndia={
    airline:'Air India',
    iataCode:'AI',
    bookings: [],

};

              // here we refactor code for arilines

// we will simply set it to Emirates.book because javascript has first class
// functions. so we can simply take book() function value here and store
// we could written function literally but that's not necesaary becasue 
// we have it above in Emirates object

const book= Emirates.book;

                           // problem

// below calling function does not work here beacuse the books function is now just a regular 
// function call. So as we learned in one of the previous sections, in a
// regular function call, the 'THIS' keyword points to undefined at least in
// strict mode. 
// this book() function is not longer book method in Emirates object. it is now 
// separate function here. books is the copy of "Emirates.book" but it is not 
// method anymore. it is now a function. So therefore, this keyword inside of 
// book method in Emirates will now point to undefined. In function the this 
// keyword depends on how the function is actually called.

// book(24, 'mohit kumar');

//   ====> how do we tell javascript that we want ti create a 
// booking on the new AirIndia airline or how do we tell 
// that to book Emirates here?

                             // solution
// here we need to tell javascript explicitly or manually what the 'THIS' keyword here
// should be like. so if we want to book Emirates flight, the this 'THIS'
// keyword should point to Emirates. but if we want to book a AirIndia flight
// , then thw 'THIS' keyword should(karna chahiye) point to AirIndia.


                   // there are 3 function METHODS:
// 1) call
// 2) apply
// 3) bind
  // using these method we can manipulate 'THIS' keyword manually


// a function is just an object and objects have methods so function can have methods
// too

// Call method

book.call(AirIndia, 24, 'mohit kumar');
console.log(AirIndia);

book.call(Emirates, 233, 'mohit kumar');
console.log(Emirates);


              // 3 airline

const IndiGo={
    airline:'IndiGo',
    iataCode:'IG',
    bookings:[]
};

book.call(IndiGo, 34, 'Sam ManekShaw');
console.log(IndiGo);


// Apply method

// apply method is same as call method the only difference is that apply
// method does not receive a list of arguments afte the 'THIS' keyword,
// it takes Array instead of list of arguments

const flightData=[34,'shivam sharma'];
// book.apply(IndiGo, flightData);
// console.log(IndiGo);

// but we don't use apply method more and we have call method that we use 
// always

// we use it to spread out the arguments from an array 
book.call(IndiGo, ...flightData);
console.log(IndiGo);