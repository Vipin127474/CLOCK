// spread operator is used to basically expand an array into all its
// element.So, basically unpacking all the array elements 
// at one
'use strict';

const arr=[8, 1, 4];

// without using spread operator
// const badNewArray=[1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArray);


// ... to basically expand this array(arr) into all of its 
// individual operator
const newArray=[1,2, ...arr];
console.log(newArray);

// console.log(...newArray);



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
orderDelivery:function({starterIndex=1, mainIndex=0,
    time= '20:00', address='e-110'})
 {
console.log(`order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
will be delivered to ${address} at ${time}`);
},

orderPasta: function(ing1, ing2, ing3)
{
    console.log(`here is your delicious pasta with ${ing1}
    , ${ing2} and ${ing3}`);
}
};

// we want to add new recipe in mainMenu

const newMenu=['paneer tadka', ...restaurent.mainMenu];
console.log(newMenu);


//two important use cases
// 1.copy array(shallow copy)
// to copy the mainMenu into mainMenuCopy
const mainMenuCopy=[...restaurent.mainMenu];
console.log(mainMenuCopy);


// 2. join two or more arrays together
// join mainMenu and starterMenu together
const menu=[...restaurent.mainMenu, ...restaurent.starterMenu];
console.log(menu);


// the spread operator not only work on arrays it works on all iterables also.
// iterables ---> the things like all arrays, strings, maps, or sets but NOT objects.

const str='john';
const letters=[...str, ' ', 'N'];
console.log(letters);
// OR
console.log(...str);

// console.log(`${...str} cena`); // error 


//Funtions that accepts multiple arguments
// and then use the spread operator to pass the those 
// arguments

//real world example
const ingredients=[
// prompt("let's make pasta! Ingredient 1"),
// prompt("let's make pasta! Ingredient 2"),
// prompt("let's make pasta! Ingredient 3")
];
console.log(ingredients);

// array manually
// restaurent.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

//using spread operator
restaurent.orderPasta(...ingredients);


//objects

const newRestaurent={...restaurent,
founder:'vipin singh'
};
console.log(newRestaurent);

const restaurentCopy={...newRestaurent};
restaurentCopy.name="hotel lalit";

// we did copy of the original restaurent because othewise,
// as we learned in previous section the change in one object
// would then also change the other one.
console.log(restaurentCopy.name);
console.log(restaurent.name);
console.log(...newRestaurent);