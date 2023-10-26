// REDUCE METHOD
// const movements=[1000, 450, -349, 434, 394, -453];
const movements=[200, -450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);
// accumulator->snowball

// const balance = movements.reduce(function(accumulator, current, i, arr) {
//     console.log(`iteration ${i}: ${accumulator}`);
//     return accumulator + current; 
// }, 0)
// console.log(balance);

// 0 -> initial value
// accumulator-> it is like a snowball it stores the value in the array 
// after sum 


const balance=movements.reduce((acc, movement) =>acc + movement);
console.log(balance);

// FOR OF LOOP
// let balance2 =0
// for (const movement of movements) {
//     balance2 += movement
// }
// console.log(balance2);

// IN THIS CASE balance2 IS WORK LIKE AN accumulator IN REDUCE METHOD


//          MAXIMUM VALUE
const maximum=movements.reduce(function(acc, curr){
    if(acc>curr){
        return acc;
    }
    else{
        return curr;
    }
}, movements[0])
console.log(maximum);

// movements[0]->inital value makes sense to be the first value here of the array

// if we put 0 only that is not correct becuase if the first value is 
// negative then maybe this might not work as expected