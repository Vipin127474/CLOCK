// LOOPING ARRAYS , BREAKING AND CONTINUING

// one of the most used application of for loops is to through 
// arrays 
const vipin=[
    'vipin',
    'singh',
    2023-2002,
    'coder',
    ['himanshu', 'umrao', 'alok']
 
];

// before loop we have to log all arrays like this
// console.log(vipin[0]);    
// console.log(vipin[1]);    
// console.log(vipin[2]);    
// console.log(vipin[3]);    
// console.log(vipin[4]);    


// after loop we have to log all array elements like this
for (let i = 0; i < vipin.length; i++) {
console.log(vipin[i], typeof vipin[i]);    
}


// we have to create an array which has datatype of all value
// which present in vipin array
const types=[];
for (let i = 0; i < vipin.length; i++) {

    //reading from vipin array
    // console.log(vipin[i], typeof vipin[i]);    


    // filling types of array
    // types[i]=typeof vipin[i]// example types[0]=typeof vipin[0]


    // this is another way of filling types of array
    types.push(typeof vipin[i]);
}
console.log(types);



const years=[1991, 2002, 2007, 1967];
const ages=[];

for (let i = 0; i < years.length; i++) {
    // ages[i]=2023-years[i];
    ages.push(2023-years[i]);
}
console.log(ages);


// continue and break statement

// continue- continue is to exit the current iteration of the loop
// and continue to the next one.

// break- break is used to terminate whole loop\

console.log('---WE WANT STRING ONLY---');
for (let i = 0; i < vipin.length; i++) {
    
    // it is the situation when we want to log string in 
    // console.
    if(typeof vipin[i]!=='string') continue;
    console.log(vipin[i], typeof vipin[i]);    
    
}


console.log('---WHEN BREAK MEETS TO CONDITION THE LOOP GETTING TERMINATED---');
for (let i = 0; i < vipin.length; i++) {
    
    // it is the situation when we want to log string in 
    // console.
    if(typeof vipin[i]==='number') break;
    console.log(vipin[i], typeof vipin[i]);    

}