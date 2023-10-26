// enhanced object literals

// ES6 introduced three ways, which make it easier
// to write object literals like this

// 3 ways we can now actually compute property names insted 
// of having to write them out manually and literally
const weekdays=['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours={
       [weekdays[3]]:{
        open:12,
        close:22,
    },
    [weekdays[4]]:{
        open:11,
        close:23,
        
    },
    [`days${2+4}`]
    or:{
        open:0, // open 24 hours
        close:24,
        
    }
    };
    
    

// 1 way: we have an object outside of restaurent object.
// const openingHours={
//     thu:{
//     open:12,
//     close:22,
// },
// fri:{
//     open:11,
//     close:23,
    
// },
// sat:{
//     open:0, // open 24 hours
//     close:24,
    
// }
// };


// this is an object literal
const restaurent={
    name:'Bukhara',
    location:'ITC Maurya, New Delhi- LEED Platinum luxury hotel | Diplomatic Enclave',
    categories:['vegetarian', 'pizzeria', 'indian thali'],
    starterMenu:['sandwich', 'bread omelette', 'burger'],
    mainMenu:['indian thali', 'butter chicken', 'dal rice'],
    order:function(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    //before ES6 here the problem is that this property name is same name
    //  as the variable name   
    
    //  openingHours: openingHours,
    
    // ES6 enhances object literals
    openingHours,

// before ES6 

//     orderDelivery:function({starterIndex=1, mainIndex=0,
//     time= '20:00', address='e-110'})
//     {
// console.log(`order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
// will be delivered to ${address} at ${time}`);
// },


// 2 way: writing methods
// After ES6 
orderDelivery({starterIndex=1, mainIndex=0,
    time= '20:00', address='e-110'})
    {
console.log(`order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
will be delivered to ${address} at ${time}`);
},

orderPasta(ing1, ing2, ing3)
{
    console.log(`here is your delicious pasta with ${ing1}
    , ${ing2} and ${ing3}`);
},

// here we want to add pizza and we add some ingredient 
// we want add mainIngredient but otherIngredients are optional
orderPizza(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
    
}
};


