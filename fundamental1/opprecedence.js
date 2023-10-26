const now=2035;
const ageJonas=now-1991;
const ageSarah=now-2020;
console.log(now - 1991 > now - 2020);

// this is left to right execution
console.log(24-4-5);

// this is right to left execution
let x, y;
x=y=24-4-5; // x = y = 15; y=15, x=15
console.log(x,y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);