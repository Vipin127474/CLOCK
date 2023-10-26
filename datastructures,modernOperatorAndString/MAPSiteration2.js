
// CONVERT ARRAY INTO MAP
const code= new Map([
   ['question', 'which is the best programming language in the world?'],
   [1, 'javascript'], 
   [2, 'java'], 
   [3, 'C/C++'], 
   ['correct', 3], 
   [true, 'Correct'], 
   [false, 'Try Again'], 
])
console.log(code);


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
console.log(Object.entries(openingHours));

// ===>>>> CONVERT OBJECT TO MAP

// we can create map like this when we have object already 
const hoursMap=new Map(Object.entries(openingHours))
console.log(hoursMap);

// each item of the question will just like before contain both the KEY & VALUE

// so here i can now directly destructure that into two separate variables
// this is a really really good use case of DESTRUCTURING

// so just to reiterate, this is exactly the same as we did when we looped over the 
// object. the only difference is that for the object we needed "Object.entries()" in the place of
// "code" now. that's just because the objects are not iterable. but then we converted it to 
// an iterable using "Object.entries()".


//                       QUIZ APP
console.log(code.get('question'));
// we only want to print only three elements from code MAP
for (const [key,value] of code) {
    if (typeof key==='number')
    console.log(`answer is ${key} : ${value}`); 
}

// const answer =Number(prompt("YOUR ANSWER IS: "));
// console.log(answer);

// it gives only true or false not values
// console.log(code.get('correct')===answer);


// it gives value of true and false also
// console.log(code.get(code.get('correct')===answer));

//                    OR

// we can do it in another ways also these are the ways

// console.log(answer===3 ? code.get(true) : code.get(false));

//                    OR

// if(answer===3)
// {
//     console.log(code.get(true));
// }
// else{
//     console.log(code.get(false));
// }


// CONVERT MAPS INTO ARRAY

console.log([...code]);

// console.log(code.entries());
console.log(...code.keys());
console.log(...code.values());