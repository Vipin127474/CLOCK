// regular function VS arrow function both are related to this keyword
'use strict';

// const vipin={
//     firstName:'vipin',
//     year:2002,
//     calcAge:function() {
//         console.log(this);
//         console.log(2023-this.year);
//     },

//     //   we should not use arrow function becuase it has not its own this keyword and it use the this keyword from parent scope.
//     greet: () => {
//     console.log(`hi ${this.firstName}`)
//     },
// //    we should use normal function becuase it has its own this keyword
//     // greet: function() {
//     //     console.log(`hi ${this.firstName}`)
//     // },
// };

// vipin.greet();

const vipin={
    firstName:'vipin',
    year:2002,
    calcAge:function() {
        // console.log(this);
        console.log(2023-this.year);
    
        // normal regular function

// solution for the function inside the method that shows the undefined when
// we using this keyword to access the elements
// 1. pre ES6 solution  
// const self=this;s

// ---the rule says that inside a regular function call,
// which this clearly is, that this keyword must be undefined
    
// const isMilenial = function()
//     {
//         console.log(self);
//         console.log(self.year>=1981 && self.year<=1996)
//         console.log(this.year>=1981 && this.year<=1996)
//     }
//     isMilenial();

// 2. modern ES6 solution(arrow function)


// ---the rule says that inside a regular function call,
// which this clearly is, that this keyword must be undefined
    
const isMilenial =() =>
    {
        console.log(this);
        console.log(this.year>=1981 && this.year<=1996)
    }
    isMilenial();
    
    },

    greet: () => {
    console.log(`hi ${this.firstName}`)
    }

};

vipin.greet();
vipin.calcAge();



// argument keyword: the argument keyword is just like a this keyword, it is only available in regular function

const addExpr=function(a, b) {
   console.log(arguments)
   return a+b;
}
addExpr(2,3);
// here we can add more arguments with help of arguments keyword
addExpr(2,3, 8, 11);

var addArrow=(a,b)=>
{
    console.log(arguments);
 return a+b;
}

addArrow()