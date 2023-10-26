// THE MAGIC OF CHAINING MEHTOD

const movements=[1000, 450, -349, 434, 394, -453, -438];
const euroToUsd= 1.1;

// const totalDeposit= movements.filter(function(movement) {
//     if(movement>0){
//         return movement;
//     }
// }).map(function(movement) {
//    return movement*euroToUsd; 
// }).reduce(function(acc, movement){
// return acc+movement;
// }, 0);
// console.log(totalDeposit);


// arrow function
const totalDeposit=movements
.filter(movement=>movement>0)
.map(movement=>movement*euroToUsd)
.reduce((acc,movement)=>acc+movement, 0);
console.log(totalDeposit);



// in this it is difficult to debug the problem
// const totalDeposit=movements
// .filter(movement=>movement>0)  //mistake
// .map((movement, i, arr)=>{
//     console.log(arr);
// return movement*euroToUsd;

// })
// .reduce((acc,movement)=>acc+movement, 0);
// console.log(totalDeposit);


// if we want to see the result we can check out the current arrya in the 
// next array method that has chained to that filter and it is map method

// the result shown negative values 3 times because the callback function 
// called 3 three times