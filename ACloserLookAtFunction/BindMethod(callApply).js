// CALL & APPLY METHOD IN PREVIOUS LECTURE

// BIND METHOD: BIND ALSO ALLOWS US TO MANUALLY SET THIS KEYWORD FOR ANY 
// FUNCTION CALL

// bind method does not immediately call the function. instead it returns
// a new function where this keyword is bound

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

const AirIndia={
    airline:'Air India',
    iataCode:'AI',
    bookings: [],

};

const book= Emirates.book;

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


const flightData=[34,'shivam sharma'];
// book.apply(IndiGo, flightData);
// console.log(IndiGo);

// book.call(IndiGo, ...flightData);
// console.log(IndiGo);


//3.                       BIND
// this will not call the book function
book.bind(AirIndia);


// 3.1.1 instead it will return a new function where 'THIS' keyword will
// always be set to AirIndia

const bookAI= book.bind(AirIndia);
const bookEM= book.bind(Emirates);
const bookIG= book.bind(IndiGo);
bookAI(23, 'vikram batra');
bookEM(45, 'mohit sharma');
bookIG(67, 'jaswant singh rawat');


//3.1            preset any parameter here

// Prespecify parts of the argument is actually common pattern called
// "partial application". so "partial application" means that a part of the 
// arguments of the original function already applied means already set

// here we preset the flightNum
const bookAI34=book.bind(AirIndia, 43)
bookAI34('saitan singh')
bookAI34('sandeep unnikrishna')

// here we preset both the parameter flightNum and name
const bookIG21=book.bind(IndiGo, 46, 'kartik thakur')
bookIG21();



// 3.2           use objects with EVENT LISTENERS

Emirates.planes=300;
Emirates.buyPlane=function() {
    console.log(this);

    this.planes++;
    console.log(this.planes);   // NaN
}
// this.planes is not NaN because that 'THIS' keyword is button element in
// 'index.html'. this happend because in previous theories an event handler
// function that 'THIS' keyword always points to the element on which that 
// handler is attached to.

// Emirates.buyPlane is an handler function and it is attached to 
// document.querySelector('.buy') element. Inside of Emirates.buyPlane
// function 'THIS' keyword will point to the button element that's why 
// 'THIS' keyword returns this button (Buy new plane)

//3.2.1                  PROOF OF THIS KEYWORD IS DYNAMICALLY SET

// so we have proof that 'THIS' keyword set dynamically because if we 
// simply called a Emirates.buyPlane out here then 'THIS' keyword would
// be Emirates Because that's the object(Emirates) calling the function
// But in this case this event listener function calling 'Emirates.buyPlane'
// And so therefore,the button itself will then become 'THIS' keyword

// Emirates.buyPlane(); // OUTPUT: 301

// document.querySelector('.buy').addEventListener
// ('click', Emirates.buyPlane)    

// in handler function here we still need 'THIS' keyword to point to the 
// Emirates Object itself otherwise this logic here will not work

// so that means is we need to manually define the 'THIS' keyword

// we need to pass in a function here not to call it so we already know
// that the call method calls the function and so that is not what we need
// so therefore we use bind method here adn we know that the bind is gonna 
// return a new function

// so 'THIS' keyword should be Emirates and so that is exactly ehat we define


document.querySelector('.buy').addEventListener
('click', Emirates.buyPlane.bind(Emirates));

// console.log(this);this now points to Emirates because that is what we told
// javascript to do right here




//3.3               partial application

// in this case many times we are not even interested in 'THIS' keyword
// but we still use bind for this
const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 300));

// EXAMPLE: there is one tax that we use all the time

// the first argument of bind is 'THIS' keyword. But in this case, we 
// don't care about the this keyword at all. It's not even here in the 
// function, so we just put here "null". it could be another value because 
// nothing will happen with it, but it's kind of a standard to just use "null".

const addVAT = addTax.bind(null, 0.23);
// addVAT= addTax = value=> value + value * 0.23; 

console.log(addVAT(100));
console.log(addVAT(200));

// it's as if we returned a new specific function from the addTax() function

// first we need the rate becuase the rate is also what we used to 
// define the addVAT function and the resulting function is then the one who
// takes in the value that's why we have value here in the inner function too
// THIS IS JUST ANOTHER WAY OF DOING THE SAME THING THAT IS DOING IN ABOVE
// EXAMPLE 
const addTax1 = function(rate){
    return function(value){
        return value + value * rate;
    };
};
const addVAT1=addTax1(0.23);
console.log(addVAT1(100));
console.log(addVAT1(200));