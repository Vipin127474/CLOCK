// LOOPING OBJECTS: OBJECT KEYS, VALUES, AND ENTRIES

// we can loop over objects which are not iterables, but in an indirect way



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
   
    [weekdays[6]]
    :{
        open:0, // open 24 hours
        close:24,
        
    }
};


const restaurent={
    name:'Bukhara',
    location:'ITC Maurya, New Delhi- LEED Platinum luxury hotel | Diplomatic Enclave',
    categories:['vegetarian', 'pizzeria', 'indian thali'],
    starterMenu:['sandwich', 'bread omelette', 'burger'],
    mainMenu:['indian thali', 'butter chicken', 'dal rice'],
    order:function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    
    openingHours,
    
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

        orderPizza: function(mainIngredient, ...otherIngredients){
            console.log(mainIngredient);
            console.log(otherIngredients);
            
        }
    };
    
    
    
    
    // 1. PROPERTY NAMES: looping over property names(they are also called keys)\

    const properties=Object.keys(openingHours); 
    // it is an arrays with 3 property name
    console.log(properties);
    

    // console.log(`we are open on ${properties.length} days`);
    
    let openStr=`we are open on ${properties.length} days: ` ;

    for (const day of properties) {
    openStr+=`${day},`    
    }

console.log(openStr);


//                    OR

    for (const day of Object.keys(openingHours)) {
        console.log(day);
    
    }

    //2. PROPERTY VALUES

    const values= Object.values(openingHours);
    console.log(values);

// ENTRIES: loop over the entire Object means the loop over both keys and 
//          values
//here all of these keys, values and entries transformed the object into
// an array.
const entries=Object.entries(openingHours);
// console.log(entries);

// for (const x of entries) {
//     console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
//                           OR
for (const [day, {open,close}] of entries) {
    console.log(`On ${day} we open at ${open} and close at ${close}`);
}

