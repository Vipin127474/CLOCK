// FILTER METHOD

const movements=[1000, 450, -349, 434, 394, -453];
const deposits=movements.filter(function(movement) {
   return movement>0; 
});
console.log(movements);
console.log(deposits);



// forOf loop
const deposit=[]
for (const movement of movements) {
    if(movement>0){
        deposit.push(movement)
    }
};
console.log(deposit);

// const withdrawls=movements.filter(function(movement, i) {
//     if(movement<0){
//     console.log(`movements ${i+1}, you withdrawl ${Math.abs(movement)}`); 
//     }
// });


    //               OR


const withdrawls=movements.filter(movement => movement<0)
console.log(withdrawls);