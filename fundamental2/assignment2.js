// function describeCountry(country, population, capital) {
    
//     return `${country} has ${population} million people and
//     its capital is ${capital}`
// }
// console.log(describeCountry('Finland', 6, 'helsinki'));
// console.log(describeCountry('India', 40, 'delhi'));
// console.log(describeCountry('australia', 20, 'austria'));




// const percentageOfWorld2=(country, population)=>
// {
//     const percentage=population/79;
//     return `${country} has ${population} million people, so it's 
//     about ${percentage} of the world population`
// }
// console.log(percentageOfWorld2('india', 800));



// function percentageOfWorld1(population) {   
//     const percentage=(population/7900)*100;
//     return percentage;
//    return `${country} has ${population} million people, so it's 
//  about ${percentage} of the world population`
// }
// console.log(percentageOfWorld1('india', 800));
// console.log(percentageOfWorld1('america', 500));
// console.log(percentageOfWorld1('china', 1441));


// function describePopulation(country, population) {
    
//     const percentage=percentageOfWorld1(country, population);
//     description= `${country} has ${population} million people, so it's 
//     about ${percentage} of the world population`
// console.log(description);
// }
// describePopulation('Russia', 700);


// Arrays
// const populations=[20, 30, 10, 40];
// console.log((populations.length===4));

// const percentages =
// [percentageOfWorld1(populations[0]),
// percentageOfWorld1(populations[1]),
// percentageOfWorld1(populations[2]),
// percentageOfWorld1(populations[3])
// ];
// console.log(percentages);



// const neighbours=['sri lanka', 'nepal', 'pakistan']
// neighbours.push('china');
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if(!neighbours.includes('germany'))
// {
//     console.log('probably not a central european country');
// }

// neighbours[neighbours.indexOf('pakistan')] = 'thailand';
// console.log(neighbours);


// objects
// const myCountry={
//     country: 'india',
//     capital: 'delhi',
//     language: 'hindi',
//     population: 10,
//     neighbours: ['sri lanka', 'pakistan', 'nepal'],

//     describe: function () {
//         return `${this.country} has ${this.population} million finnish speaking
//         people, ${this.neighbours.length} neighbouring countries
//         and a capital called ${this.capital}`        
//     },

//     checkIsland: function()
//     {
//         if(this.neighbours.length)
//         {
//           return true;
//         }
//     else
//     {
//        return false;
//     }
// }
// };

// console.log(myCountry.checkIsland());
// console.log(myCountry.describe());

// console.log(`${myCountry.country} has ${myCountry.population} million finnish speaking
// people, ${myCountry.neighbours.length} neighbouring countries
// and a capital called ${myCountry.capital} `);

// myCountry.population=myCountry.population+2;
// console.log(myCountry.population);
// myCountry['population']=myCountry.population-2;
// console.log(myCountry.population);


// LOOPS

// for (let voter = 1; voter <= 50; voter++) {
//     console.log(`Voter number ${voter} is currently voting`);    
// }

// function percentageOfWorld1(population) {   
//     const percentage=(population/7900)*100;
//     return percentage;
//    return `${country} has ${population} million people, so it's 
//  about ${percentage} of the world population`
// }
// console.log(percentageOfWorld1('india', 800));
// console.log(percentageOfWorld1('america', 500));
// console.log(percentageOfWorld1('china', 1441));

// const populations=[20, 30, 10, 40];
// console.log((populations.length===4));

// const populations = [10, 20 ,30 ,40];
// const percentages2=[];

// for (let i = 0; i < populations.length; i++) {
//     percentages2[i]=percentageOfWorld1(populations[i])
//     console.log(percentages2[i]);
// }

// const listOfNeighbours=[['canada', 'mexico'], ['spain'], ['norway', 'sweden', 'russia']];
// const element=[];
// for (let i = 0; i < listOfNeighbours.length; i++) {

// for(let j=0; j< listOfNeighbours[i].length; j++)
// {
// element[i]=listOfNeighbours[i][j];
// console.log(element[i]);
// console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
// }    
// }

// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', 
// but this time using a while loop (call the array 'percentages3')
// 2. Reflect on what solution you like better for this task: the for loop or the while
// loop?

// const population=[10,20,30,40];
// const percentage3=[];
// let i=0;

// while (i<population.length) {
    
// percentage3[i]=percentageOfWorld1(population[i]);
//     i++;
// }
// console.log(percentage3);


// const arr=[10,20,40,60];
// const arr2=[10,20,40,60];
// const l=[];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]===arr2[i])
//     {
//         l[i]=arr[i]+arr2[i]
//         console.log(l[i]);
//     }
//     else{
//         console.log('wrong choice');
//     }
// }




// for (let i = 0; i <  arr1.length; i++) {
//     // for(let j=i+1; j< i;j++)
//     // {
//         if(arr1[i]>arr1[i+1])
//     {
//         console.log(`${arr1[i]} is greater than ${arr1[i+1]}`);
         
//     }
//     else if(arr1[i]<arr1[i+1]){
//         console.log(`${arr1[i]} is less than ${arr1[i+1]}`);
//     }
//     else if(arr1[i]===arr1[i]){
//         console.log(`${arr1[i]} is equal to ${arr1[i]}`);
//     }
// }


const arr=[20,30,10,60];
let temp;
for(let i=0; i<arr.length; i++){
    for(let j=0; j< arr.length-1; j++)
    {
if(arr[j]>arr[j+1]){
   temp=arr[j];
   arr[j]=arr[j+1];
   arr[j+1]=temp;
}

}
}
for(i=0; i<arr.length;i++)
{
    for(j=0; j<arr.length-1;j++)
    {
// console.log(arr[j]);
console.log(arr[j+1]);
}
}
// let a=10;
// let b=20;
// let swap;
// swap=a;
// a=b;
// b=swap;
// console.log(a);
// console.log(b);