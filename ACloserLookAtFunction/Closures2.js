// CLOSURES EXAMPLE

// Examples are going to demonstrate that we don't need to return a function
// from another function in order to create a closure

// EXAMPLE 1

// when we reassign functions even without returning them even then it will 
// create a closure
let f;
const g=function()
{
    const a=45;
    f=function()
    {
        console.log(a*3);
    }
}

const h=function(){
    const b=56;
    f=function()
    {
        console.log(b*2);
    }
}
g();
f();

// now f is a different function in h() than in g(). here we reassigned
// it
h();
f();
// when we reassign the function to a new value then the old closure basically
// disappears
console.dir(f);



// reassign the value of function in g()
// first the closure is a=45

//reassign the value of function in h()
// first the closure is b=56


//when we reassign the function to a new value then the old closure basically
// disappears so the closure is B so this variable(const b=56) here of the 
// birthplace where it was reassigned. so it really is true that a closure 
// always makes sure that a function does not lose the connection to the 
// varaible that were present at its birthplace so it's always going to 
// remember them and 

// in our case here the function was kind of born inside g() function first
// and then it was essentially reborn again in the h() function. So first 
// the closure contained the a variable of its first birthplace as it was
// reborn then it remembered b variable of its birthplace

// EXAMPLE 2:

const boardPassenger=function(n, wait) {
    // borading happens in groups and we usually have 3 groups 
    const perGroup=n/3;

    setTimeout(function(){ //callback function
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 gorups, each with ${perGroup} passengers`);
    }, wait*1000)
    console.log(`Will start borading in ${wait}seconds`);
}
boardPassenger(150,3);



// this callback function here was executed completely independently from 
// the board passengers function. but still the callback function was able 
// to use all the variables that were in the variable environment in which
// it was created so that's "n" and "perGroup" 

// this is a clear sign of a closure being created
// so the only way in which this callback function here can have access to the
// variables that are defined in the boardPassenger function that has long
// finished execution is if it created a closure.

//  closures have priority over the scope chain
const perGroup=1200;


// so if the scope chain had priority over the closure then this callback
// function here would indeed use this variable(perGroup) here which is 
// in the global scope. because we can imagine this function here basically
// being executed in the global scope so if it wasn't for the closure it would 
// use this variable which is in global scope. if we remove perGroup variable
// which is in local scope then it will be able to use the global scope variable
// (perGroup). as we put it back here then the callback function will close 
// this variable(perGroup) so it will close over the entire variable environment
// and so therefore it will then use perGroup which is in local scope here
// first. so the closure even has priority over the scope