// another loop is: while loop

// for(let rep=1; rep<=10;rep++)
// {
//     console.log(`lifting weights repetition ${rep}`);
// }


// let rep=1;
// console.log('----------while loop---------');
// while (rep<=10) {
//     console.log(`lifting weights repetition ${rep}`);
//     rep++;
// }


// not depend on counter variable
// we Math.trunc for integer number.
let dice=Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !==6) {
    console.log(`you rolled a ${dice}`);
    dice=Math.trunc(Math.random() * 6) + 1;

    if (dice===6) console.log("loop is about to end");

}
