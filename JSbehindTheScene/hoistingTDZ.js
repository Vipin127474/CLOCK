// 'use strict';

// varibles
console.log(me);
// console.log(job);
// console.log(year);

var me='vipin';
let job='teacher'; 
const year=2002;


// functions

console.log(addDecl(7,8));
// console.log(addExpr(7,8));
// console.log(addArrow(7,8));



function addDecl(a,b) {
    return a+b;
}

const addExpr=function(a,b) {  // it gives error in console because we use const keyword here and const can't be accessed 
    return a+b;               //  before declaration

}

const addArrow=(a,b)=>a+b; 


// if we use here var it will give addArrow/addExpr is not a function because any variable declared with var will be hoisted and set
// to be undefined.

// console.log(addArrow);
// var addArrow=(a,b)=>a+b;




//---->example
// the way of hositing work with var and it is not correct


// through this we get 'all product deleted' even through
// numProducts is actually 10 

// why did that happen?
// it happend becuase of hositing. at this point od code here
// the numProducts variable is in fact, not 10 instead,
//  what is it? well, it is undefined.


if(!numProducts) 
{
    deleteShopping();
}


var numProducts=10;

function deleteShopping() {
    console.log('all product deleted');
}



var x=1;
let y=2;
const z=3;

console.log(x===window.x);
console.log(y===window.y);
console.log(z===window.z);

// the variable decalred with var will create a property
// on the global window object.And that can have some 
// implications in some cases/