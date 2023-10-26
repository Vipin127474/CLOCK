// funtion declaration vs expression

// funtion declaration

// difference between declaration vs expression is:
// in function declaration we can call function declaration before they defined.
// in the code
//console.log(calcAge1(2002));



function calcAge1(birthYear) {
    return 2023-birthYear;
}
console.log(calcAge1(2002));

// funtion expression or anonymus funtion
// but in funtion expression the calling of function declaration before they define does not work.
// console.log(calcAge2(2002));

const calcAge2= function(birthYear) 
{
    return 2023-birthYear;
}
calcAge2(2003);
console.log(calcAge2(2002));