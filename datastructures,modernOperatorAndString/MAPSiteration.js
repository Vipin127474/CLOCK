// MAPS: ITERATION

// we can add elements using set() method but there is another method through
// which we can add elements. we have to prefer to add the element without 
// usong set() method 

// here we make array of arrays
const question= new Map([
    ['question', 'what is the best programming language'],
    [1, 'C'],
    [2, 'java'],
    [3, 'javascript'],
    ['correct', 2],
    [true, 'correct'],
    [false, 'incorrect, try again'],
])
console.log(question);


// convert Object to Map
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

// this is also is an array of an array  [[ ]] like in Map creation
console.log(Object.entries(openingHours));

const hoursMap=new Map(Object.entries(openingHours))

console.log(hoursMap);


// MAPS ARE ITERABLE
// here we want to display 3 option from question Map
// then show correct answer
console.log(question.get('question'));
for (const [key, value] of question) {
    if(typeof key === 'number')
console.log(`Answer ${key}: ${value}`);
}
const answer=Number(prompt("Your answer"))
console.log(answer);

if(question.get('correct')===answer){
    console.log(question.get(true));
}
else{
    console.log(question.get(false));
}

console.log(question.get(question.get('correct')===answer));


//convert map to array

console.log(...question);

// after convert in an array from map the array had these methods but map doesn't had
// these meth ods
// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());
console.log(...question.entries());
console.log(...question.keys());
console.log(question.values());
