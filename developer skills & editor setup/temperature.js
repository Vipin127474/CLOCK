// // PROBLEM 1.
// // we work for a company building a smart home thermometer. 
// // Our most recent task is this: "Given an array of temperatures
// // of a one day, calculate the temperature amplitude.keep in mind 
// // that sometimes there might be a sensor error."

// const temperature=[5, -2, -7, "error", 15, 16];

// const temperatures=[3, -3, -6, "error", 19, 20];

// const tem=temperature.concat(temperatures);

// // 1) understanding the problem.
// //-- what us temp. amplitude? 
// // answer: difference between highest and lowest temp
// // -- how ot compute max and min temperatures.
// // -- what's a sensor error? And what to do.


// // 2) Breaking up into sub-problems.
// // --How to ignore errors?
// // --find max value in temp array
// // --find min value in temp array
// // --Subtract min from max (amplitude) and return the it.


// function calcAmplitude(temps) {
//  let max=temps[0];
//  let min=temps[0];
 
//  for (let i = 0; i < temps.length; i++) {
//         let currentemp=temps[i];

// if(typeof currentemp!=="number") continue;

// else if(currentemp>max)
// {            
// max=currentemp;
// }
// else if(currentemp<min)
// {
// min=currentemp;
// }
//     }
//     console.log(max, min);

//     return max-min;
// };
// console.log(calcAmplitude(temperature));


// // PROBLEM 1.
// // function should now recieve two arrays of temps.


// // 1) understanding the problem.
// // --with 2 arrays, should we implement functionality 
// // twice? NO! Just merge two arrays

// // 2) Breaking up into sub-problems.
// // --Merge two arrays

// function calcAmplitude(temps) {
//     let max=temps[0];
//     let min=temps[0];
    
//     for (let i = 0; i < temps.length; i++) {
//            let currentemp=temps[i];
   
//    if(typeof currentemp!=="number") continue;
   
//    else if(currentemp>max)
//    {            
//    max=currentemp;
//    }
//    else if(currentemp<min)
//    {
//    min=currentemp;
//    }
//        }
//        console.log(max, min);
   
//        return max-min;
//    };

   
// console.log(calcAmplitude(tem));


const first = () => {
    let a=1;
    const b=second(7,9);
    a=a+b;
    return a;

}

function second(x,y)
{
    var c=2;
    return c;
}


const c=first();
console.log(c);
