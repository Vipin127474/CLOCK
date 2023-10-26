// factorial of a number
// const num=4;
// let fact=1;

// for (let i = 1; i <=num; i++) {
//  // 4!=4*3*2*1=24;
// fact=fact*i;
// }
// console.log(fact);

// recursive factorial
// function factorial(num) {

//     if(num==0)
//     {
//         return 1;
//     }
//     else{

//         return num*factorial(num-1);
//     }
// }
// console.log(factorial(4));


// fibonacci series
// 7=0,1,1,2,3,5,8
// let Num=prompt("enter the number of terms: ");
// let n1=0;
// let n2=1;
// let n3;
// console.log("fibonacci series is: ");
// for (let i = 1; i <=Num; i++) {
//     console.log(n1);
//     n3=n1+n2;
//     n1=n2;
//     n2=n3;
// }


// recursive fibonacci series
// function fibonacci(num) {
//     if(num==0)
//     {
//         return 0;
//     }

//     else if( num==1)
//     {
//         return 1;
//     }
//     else{
// return fibonacci(num-1) + fibonacci(num-2)
//     }
// }
// const n=prompt("enter number of terms: ");
// for (let i = 0; i < n; i++) {
//     console.log(fibonacci(i));
// }


// prime or not

const num=prompt("enter the number of terms");
let flag=2;
let count=0;
for (let i = 2; i < num; i++) {
for (let j = 1; j < num; j++) {
        
    if(j%i==0)
    {
 flag=2;
 count++       
    }
}

if(flag==2)
{
    console.log('number is prime');
}
else{
    console.log('number is not prime');
}
}