// FOR EACH LOOP

const movements=[200, 500, 300, 563, -950, -422, 170, -3000];

//  here positive values are deposits and negatiave values are withdrawls

// for (const movement of movements) {
//     if(movement>0){
//         console.log(`your deposited: ${movement}`);
//     }
//     else{
//         console.log(`your withdrawl: ${Math.abs(movement)}`);

//     }
// }

// console.log('--------FOREACH LOOP---------');
// movements.forEach(function(movement){
//     if(movement>0){
//         console.log(`your deposited: ${movement}`);
//     }
//     else{
//         console.log(`your withdrawl: ${Math.abs(movement)}`);

//     }
// })
// here forEach loop is higher order function

// here forEach loop need callback fucntion in order to tell it what to do
// it's forEach method here that will call this callback function. we are 
// not calling it ourselves as always

//QUESTION. when the forEach call the callback function
// ANSWER. it loops over the array and in each iteration it will execute this 
// callback function here. aslo as the forEach calls this callback function
// in each iteration it will pass in the current element of the array as an 
// argument(movement) and we can give any name to the argument.
// so each time this callback function is called, so in each iteration it 
// will receive the current element of the array as an argument


// SO HOW IT WORKS BEHIND THE SCENE

// in iteration zero forEach calls this function here. so the 
// anonymous function in this case without a name

// 0:function(200)
// 1:function(500)
// 2:function(300)
// 3:function(563)
// 4:function(950)
// 5:function(422)
// 6:function(170)
// 7:function(3000)


// we if we needed access to a counter variable here
// it is just like we can access the current index of the array here in the for
// of loop

for (const [i, movement] of movements.entries()) {
    if(movement>0){
        console.log(`Movement ${i+1}: your deposited: ${movement}`);
    }
    else{
        console.log(`Movement ${i+1}:your withdrawl: ${Math.abs(movement)}`);

    }
}

// so here i is the counter 


console.log('--------FOREACH LOOP---------');
movements.forEach(function(movement, i, arr){
    if(movement>0){
        console.log(`Movement ${i+1}: your deposited: ${movement}`);
    }
    else{
        console.log(`Movement ${i+1}: your withdrawl: ${Math.abs(movement)}`);

    }
})

// forEach loop calls this callback function in each iteration and as it 
// calls this function it also passes in the current element of the array.
//  but that is not all it passes in in fact forEach passes in the current
//  element, the index and the entire array that we are looping. These are 
//  parameters

// so here first parameter is current element
// so here second parameter is current index
// so here third parameter is entire array that we are looping
// in the parameter the order is important


// order of the parameters is different in both scenerios

// forEach loop

// first parameter is current element
// second parameter is current index
// third parameter is entire array that we are looping

// for of loop

// while when we use her the entries in the for of loop
// then the :
// first element is index
// second element is current element of the array


//                             DIFFERENCE
// difference is that continue and break statement does not work in 
// "FOREACH LOOP". and "FOREACH LOOP" loop over the entire array


