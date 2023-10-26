// here we recap about what we learn about funtion before
// we learn about 3 types of funtion.
// 1.funtion declaration
// 2.funtion expression
// 3.arrow funtion(special type of function expression)



// birthYear parameteres in both funtion is local variable in their funtion so there is no problem in execution


function calcAge(birthYear) {
    return 2035-birthYear;
}

function yearsUntilRetirement(birthYear, firstName) 
{
const age=calcAge(birthYear);
const retirement=65-age;

if(retirement>0)
{
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
}
else
{
    console.log(`${firstName} already retired`);
    return -1;
}

}
console.log(yearsUntilRetirement(2001,'vipin'));
console.log(yearsUntilRetirement(1956,'vipin'));