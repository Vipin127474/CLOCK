// LOOPING BACKWARDS AND LOOPS IN LOOPS

//ARRAY
const vipin=[
    'vipin',
    'singh',
    2023-2002,
    'coder',
    ['himanshu', 'ankit', 'rohan']
];

//In alst lecture we learn how element access from beginning 
// 0,1,2,3,4

// but now we learn how element access from last 4,3,2,1,0

for (let i = vipin.length-1; i >=0; i--) {
    console.log(i, vipin[i]);
}


// loop inside of loop
// suppose we have 3 exercises and we have to do them each 5 times.

for (let exercise = 1; exercise <=3; exercise++) {
    console.log(`-------Starting exercises ${exercise}`);

    for (let rep = 1; rep <=5; rep++) {
        console.log(`exercise ${exercise}lunges repetiiton ${rep}`);
        
    }
    
}