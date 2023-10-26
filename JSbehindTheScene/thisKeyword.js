'use strict';
// console.log(this);

function birthYear(age) {
    console.log(2023-age);
    // console.log(this);// undefined when there is strict mode on
}
birthYear(21);


const birthYearArrow = age => {
    console.log(2023-age);
    // console.log(this);// it shows the window because it uses the lexical this keyword which means it uses its parent scope's this keyword
}
birthYearArrow(21);


const sum={
    num1:1,
    add:function() {
       console.log(this);
       console.log(20+this.num1);
    } 
};
sum.add();


const addition={
    num1:2,
};
addition.add=sum.add;
addition.add();


const func=sum.add;
func();