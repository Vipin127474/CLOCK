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
    // [`days${2+4}`]
    // or 
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


        //    ----->USING IF ELSE CONDITION 

//---->we want to getting the opening hour of monday

// When we don't know if the restaurant is open on Monday
// and we want to avoid this error "restaurent.openingHours.mon.open"
// we would first have to check if this "restaurent.openingHours.mon" 
// here actually exist or not.

// if(restaurent.openingHours.mon)
// console.log(restaurent.openingHours.mon); //undefined 
// console.log(restaurent.openingHours.mon.open); //error undefined.open 

// if(restaurent.openingHours.fri)
// console.log(restaurent.openingHours.fri.open); //11


// this can helpful when we have deeply nested objects 
// with lots of optional properties

//----> restaurent.openingHours && restaurent.openingHours.mon 
// are optional so we can check that it is exist or not

// if(restaurent.openingHours && restaurent.openingHours.mon)
// console.log(restaurent.openingHours.mon.open); // show nothing


        // ----->>USING OPTIONAL CHAINING

// OPTIONAL CHAINING(ES2020): with optional chaining if a 
// certain property does not exist,  then undefined is 
// returned immediately. And so that will then avoid that kind
// of error.

// here trying to read open only happens if all of this
// "restaurent.openingHours.mon" here  actually exists

// here mon and openingHours is optional that's
// why we have the question mark here basically, asking
// if it exists 

// if restaurent.openingHours.mon does not exist, then 
// the open property will not even be read and so 
// therefore we don't get that error

console.log(restaurent.openingHours.mon?.open);
console.log(restaurent.openingHours?.mon?.open);

// console.log(restaurent.openingHours.mon.open);// error


// EXAMPLE 
const days=['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of days){
// console.log(day);
// if we want to use a variable name as property name we 
// have to use square brackets [day]

// dynamically
// if we don't want undefined on mon,tue,wed,sat then we have to 
// give OR value so then it can take that value if it is not open

// if we use here || operator then the restaurent is closed
// on sunday becuase its value is 0 which is falsy value so
// we use her nullish coelescing operator so the value remain 0
const open= restaurent.openingHours[day]?.open??'closed';
console.log(`On ${day}, we open at ${open}`);
// manually
// console.log(openingHours.thu); 
}


// METHODS
// here if CONDITION is true then call the function but if not
// then show Method does not exist
console.log(restaurent.order?.(0,2)?? 'Method does not exist');
                        //   OR
console.log(restaurent.order?.(0,2)|| 'Method does not exist');


//ARRAYS
const users=[
    {
        name:'john',
        email:"hello@gmail.com",
    }
]
// const users=[];
// here we check if an array is empyy or not
console.log(users[0]?.email||'user array empty');



// using if else CONDITION
if (users.length>0)
 {
 console.log(users[0].name);   
} else {
    console.log('users array empty');
}