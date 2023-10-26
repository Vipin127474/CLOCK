// REMAINDER OPERATOR

// it simply returns the remainder of a division

console.log(7 % 2);
console.log(7 / 2);  // 7 -> 2 * 3 + 1 here one is remainder


console.log(8 % 3);
// the output is 2.6666...5 but if we took only integer part then the 
// remainer is 2
console.log(8 / 3); // 8 -> 2 * 3 + 2


console.log(6 % 2);
console.log(6 / 2); // 6 -> 2 * 3 + 0


const isEven= n => n % 2 === 0
console.log(isEven(6));
console.log(isEven(9));
console.log(isEven(4));
console.log(isEven(10));


// FROM BANKIST APP(WORKING WITH ARRAYS)
labelBalance.addEventListener('click', function(){

    [...document.querySelectorAll('.movements_row')].
    forEach(function(row, i){
    if(i % 2 === 0) 
     row.style.backgroundColor='red'; 
     
     if(i % 2 != 0)
     row.style.backgroundColor='lightred'; 
     
    });
});