// arithmetic operator

const now=2045;
const ageJonas=now-1999;
const ageSarah=now-2022;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2**3);

const firstName="ankit";
const lastName="kumar";
console.log(firstName +" "+ lastName);

// typeof operator
 console.log(typeof "ankit");


//  assignment operator

let x = 10 + 5;
x+=12; // x = x+10; x = 15 + 12
x*=2;// x= x*2=54
x/=3;// x=x/3=18;
x++;//x=x+1;
x--;//x=x-1;
console.log(x);


// comparison operator(>,<,>=,<=)
console.log(ageJonas > ageSarah);

// sarah is full age or not
console.log(ageSarah>=18);

const isFullAge=ageSarah>=18;

console.log(now-1999>now-2022);