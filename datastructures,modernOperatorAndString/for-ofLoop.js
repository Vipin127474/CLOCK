// LOOPING ARRAYS: FOR-OF LOOP

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

// we want to loop all over the menu

// FOR LOOP
const menu=[...restaurent.starterMenu, ...restaurent.mainMenu];
// for (let i = 0; i < menu.length; i++) {
//     const element = menu[i];
//     console.log(element);
// }



// FOR-OF LOOP
// we can use the continue and break keywords
for(const item of menu){
console.log(item);
}
// [i, item] destructing the item array
for(const [i, el] of menu.entries())
{

    // in this the item[1] means item is begins from 1 position

    // old way 
    // console.log(`${item[0]+1}: ${item[1]}`);
    
    // new way
    console.log(`${i+1}: ${el}`);
}

// console.log([...menu.entries()]);

const cat=[...restaurent.categories];
for (const thing of cat) {
    console.log(thing);
}

for (const thing of cat.entries()) {
    console.log(`${thing[0]}: ${thing[1]}`);
}