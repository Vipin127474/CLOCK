// control structure
// if (condition) {
// } else {    
// }


const age=15;

if (age>=18) {
    console.log('Sarah can start driving license');
}
else{
    const yearsLeft=18-age;
    console.log(`Sarah is too yound wait another ${yearsLeft} years`);
}

const birthYear=1990;
let century;
if (birthYear<=2000) {
    century=20;
}
else{
    century=21;
}

console.log(century);