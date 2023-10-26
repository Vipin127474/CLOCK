const calcAverageHumanAge=function(ages){
// 1
    const humanAges=ages.map(function(age){
if(age<=2){
 return 2 * age;
}
else{
    return 16 + age * 4;
}
    });
    console.log(humanAges); // convert in human age

// 2
const adults=humanAges.filter(function(age){
if(age>=18){
    return humanAges;
}
    });
    console.log(adults);   // to exclude the dogs which are <=18

// 3
const average=adults.reduce(function(acc, age, i, arr){
// return (acc+age)/adults.length;

//               OR

return (acc+age)/arr.length;

// 2 3. (2+3)/2=2.5 === 2/3+3/2=2.5
}, 0);
console.log(average); // average of human age
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);   
calcAverageHumanAge( [16, 6, 10, 5, 6, 1, 4]);   
