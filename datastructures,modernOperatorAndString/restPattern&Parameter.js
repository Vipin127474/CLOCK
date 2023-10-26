// rest pattern looks like the spread operator. So it has the 
// same syntax with the three dots but it acutally does the 
// oppoesite of the spread operator

// rest is to pack elements into an array
'use strict';

//1. destructing(rest pattern)
//spread, because on Right side of = operator
const arr=[1,2,...[3,4]];

//rest, because on left side of an = operator
const [a,b,...others]= [1,2,3,4,6];
console.log((a, b, others));


// the three dots on both sides of the assignment operator
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
},

// here we want to add pizza and we add some ingredient 
// we want add mainIngredient but otherIngredients are optional
orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
    
}
};
// the rest syntax collects all the array after the last variable.so, that mean
// we can't do this because rest element must be the last    
// ...otherfood is rest           
// const[indianthali, ,dalrice, ...otherfood, bread ]= [...restaurent.mainMenu, ...restaurent.starterMenu] 
const[indianthali, ,dalrice, ...otherfood ]= [...restaurent.mainMenu, ...restaurent.starterMenu]
console.log(indianthali, dalrice, otherfood);


//Objects
// here we want to store thursday and friday into weekdays
// but not sturday

const {sat, ...weekdays}=restaurent.openingHours;
console.log(weekdays);


// 2. function(rest pattern)
const add=function(...numbers){
    let sum=0;
    for (let i = 0; i < numbers.length; i++) {
        sum+=numbers[i];
    }
    console.log(sum);
};
    add(2,3);
    add(5,3,7,2);
    add(5,3,7,2,8,9);

const x=[23,6,3];
add(...x);


// rest parameter
// the first argument is stored into orderPizza's mainingredient, and rest of the 
// arguments stored into othersingredient
restaurent.orderPizza('tomatoes', 'onion', 'red chilli', 'seasoning');

// here the first argument is stored into mainIngredient and
// then the remainig argument here will simply put into in an 
// empty array because of course there are no elements
restaurent.orderPizza('tomatoes');


//strings
const str='hello';
const str1='madam';
const str2='mada';
const str3='maam';

const[s1, ...s2]=[str, str1, str2, str3];
console.log(s1, s2);