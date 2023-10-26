// MAP() METHOD

// convert EURO into USD

// in map methpd we use a function to solve this problem of creating a
// new array
const movements=[1000, 450, -349, 434, 394, -453];
const euroToUsd= 1.1;


// we use movementsUSD because map method store elements into new array
const movementsUSD=movements.map(function(movement) {
    return movement*euroToUsd;
})

// original movements array does not mutate
console.log(movements);

// new array
console.log(movementsUSD);



// FOREACH LOOP

// here we manually create an array
const movementsUSDfor=[];
for (const movement of movements) {
    const convert=movement*euroToUsd;

    movementsUSDfor.push(convert)
    console.log(movementsUSDfor);
}


// arrow function(MAP METHOD)
const convertInUSD=movements.map((movement) => movement *euroToUsd);
console.log(convertInUSD);


// map method will all 3 paramters
// const movementDescription=movements.map((movement, i, arr)=>{  
//     if(movement>0){
//    return `movement ${i+1}, You deposited ${movement}`;
// }
// else{
//    return `movement ${i+1}, You withdraw ${Math.abs(movement)}`
// }
// });
// console.log(movementDescription);

                        // OR

const movementDescription=movements.map((movement, i) => 
`movement ${i+1}: You ${movement>0 ? 'deposited' : 'withdraw'} ${Math.abs(movement)}`);
console.log(movementDescription);