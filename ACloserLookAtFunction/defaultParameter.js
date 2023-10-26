'use strict'
const bookings=[]
const createBooking= function(flightNum, numPaasengers=1, price=1000*numPaasengers) {
 
    // (ES5)short circuiting
//  numPaasengers=numPaasengers || 1;
//  price=price || 10000;

//         OR

// (ES6) default parameters
// const createBooking= function(flightNum, numPaasengers=1, price=1000) {

    const booking={
     flightNum,
     numPaasengers,
     price
 }
 console.log(booking);   
bookings.push(booking);
}

createBooking('IN123');
createBooking('IN433', 2, 2000);
createBooking('IN433', 2, 2000);

// we can't skip the parameters given in function. like we can't skip
// numPaasengers and assign value to price
createBooking('IN433', 1000);

// if we want to skip the numPaasengers and assign value to price
createBooking('IN433',undefined, 1000); // 'IN433', 1

