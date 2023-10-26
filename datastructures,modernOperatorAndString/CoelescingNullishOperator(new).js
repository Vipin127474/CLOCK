'use strict';

const restaurent1={
    name: "hotel lalit",
    noOFguests: 0,
}
// using short circuting and OR operator 

// it will give no guests when noOFguets=0 but we don't 
// expect that  

const guest2=restaurent1.noOFguests || 'no guests';
console.log(guest2); 


// nullish: null and undefined (NOT include 0 or '')
// in this no noOFguests=0 it will give 0  

const guest1=restaurent1.noOFguests ?? 'no guests';
console.log(guest1);
