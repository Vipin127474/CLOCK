const dogsJulia=[3, 5, 2, 12, 7]
const dogsKate=[4, 1, 15, 8, 3]


//1
const checkDogs = function(dogsJulia, dogsKate) {

// 2
const dogsJuliaCorrected=dogsJulia.slice(); 
dogsJuliaCorrected.splice(0,1); //remove 1 element from 0 index
dogsJuliaCorrected.splice(-2)   // remove two element from last

// 3
const dogs=dogsJuliaCorrected.concat(dogsKate)// [5, 2, 4, 1, 15, 8, 3]

dogs.forEach(function(dog, i){
    if(dog>=3){
       console.log(`Dog number ${i+1} is an adult and is ${dog} years old`); 
    }
    else{
        console.log(`Dog number ${i+1} is still a puppy`);
    }
});

};

checkDogs(dogsJulia, dogsKate);
