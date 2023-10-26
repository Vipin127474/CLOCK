// let's go back to two logical operators- AND & OR operators

// the logical operators not only return the boolean values
// they can do these properties below here

//3 properties:
// 1. the logical operators use ANY datatypes, 
// 2. they return ANY data type, 
// 3. they do short circuting


// OR OPERATOR

// short circuting means in OR case that if the first values
// is truthy value, it will immediately return that first value.
// and it will not evaluate the second value

console.log(3 || 'john'); //3
console.log('' || 'john');// john because '' is falsy value
console.log(true || 0);// true
console.log(undefined || null);// null   because here is no short
                                        //  circuting and that's then 
                                        // the one gonna be returned

console.log(undefined || 0 || '' || 'hello' || 23);// hello


const restaurent1={
    name: "hotel lalit",
    noOFguests: 100,
}
// using ternary operator

// if noOFguests=0 then it will give 'no guests' but that is not 
// a result we want 

const guest1 = restaurent1.noOFguests ? restaurent1.noOFguests
: 'no guests';
console.log(guest1);

// using short circuting and OR operator
const guest2=restaurent1.noOFguests || 'no guests';
console.log(guest2);
 


// AND OPERATOR
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

// the AND OPERATOR short circuts, when the first value is falsy and 
// then immediately returns that falsy value without even evaluating 
// the second one.

// it finds the value until it will false 
// it checks the first value if it is true then it will move to 
// the second one if it false it will show the second value

console.log(0 && 'john');
console.log(undefined && null);
console.log(true && 0);
console.log(9 && 'john');
console.log('kkk'&& 50);

console.log('kkk'&& 50&& null && 'jonas');

// practical example
if(restaurent.orderPizza){
    restaurent.orderPizza('mushroom', 'spinach', 'red chilli')
}
else {
    console.log("no pizza order");
}
// if restaurent.orderPizza does not exist then it's undefined (show undefined) 
// but we give here second value to call the function so it will call it

restaurent.orderPizza && restaurent.orderPizza('mushroom', 'spinach', 'red chilli');
// console.log(orderForPizza); 