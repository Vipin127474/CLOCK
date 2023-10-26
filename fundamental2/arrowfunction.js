// Arrow Funtion
// Arrow Funtion is simple a special form of funtion expression that is shorter
// and therefor faster to write
// here we don't need curly braces

const calcAge3 = birthYear => 2023-birthYear;
const age3=calcAge3(2005);
console.log(calcAge3(2005));


// when there is more than one line of code we need to return and need of curly
// braces for them
// const yearsUntilRetirement=birthYear => {
//     const age=2037-birthYear;
//     const retirement=65-age;
//     return retirement
// }
// console.log(yearsUntilRetirement(2002));

// when there is more than one parameter
const yearsUntilRetirement=(birthYear, firstname) => {
    const age=2037-birthYear;
    const retirement=65-age;
    // return retirement;
    return `${firstname} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(2002, 'rohit'));
console.log(yearsUntilRetirement(1999, 'mohit'));
