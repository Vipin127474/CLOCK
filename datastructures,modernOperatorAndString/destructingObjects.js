'use strict';

const restaurent={
    name:'Bukhara',
    location:'ITC Maurya, New Delhi- LEED Platinum luxury hotel | Diplomatic Enclave',
    categories:['vegetarian', 'pizzeria', 'indian thali'],
    starterMenu:['sandwich', 'bread omelette', 'burger'],
    mainMenu:['indian thali', 'butter chicken', 'dal rice'],
    order:function(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    
    openingHours:{
        thu:{
        open:12,
        close:22,
    },
    fri:{
        open:11,
        close:23,
        
    },
    sat:{
        open:0, // open 24 hours
        close:24,
        
    }
},
// So instead of defining the parameters manually ,we can just pass an object into the function as an argument,
// and the function will then immediately destructure that 
// object. 
// orderDelivery:function(obj)
orderDelivery:function({starterIndex=1, mainIndex=0,
    time= '20:00', address='e-110'})
 {
console.log(`order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
will be delivered to ${address} at ${time}`);
}
};

restaurent.orderDelivery({
    time: '22:40',
    address:'c-50',
    mainIndex:2,
    starterIndex:2,
});

restaurent.orderDelivery({
    address:'c-50',
    starterIndex:1,
})

// destruct the object we use curly braces.
// then all we have to do is to provide the variable names that
// exactly match the property names that we want to retrieve
// from the object.

  const {name, openingHours, categories}=restaurent;
  console.log(name, openingHours, categories);


// now what if we wanted the variable names to be different 
// from the property name

const {name: restaurentName,
     openingHours: hours,
       categories:tags}=restaurent;
console.log(restaurentName, hours, tags);

// default variable

// this is same as array in destructingArrays
// if variable is not defined in object and it has default value
// then it takes it as its value

const {menu=[], starterMenu:starters=[]}=restaurent;
console.log(menu, starters);


// mutating variables(switching the values)

let a=10;
let b=39;
const obj={a:22, b:9, c:12};

// destruct object

// when we start a line with curly braces like this, then
// javascript expects a code block. and we can't assign anything
// to a code block, like we did here with equal sign. 
// {a, b}=obj; //error
({a, b}=obj);
console.log(a,b);


// nested objects
// we wanted to create two variables, open and close and these
// should contain the open and close hours for friday

const{fri:{open, close}}=openingHours;
console.log(open, close);



