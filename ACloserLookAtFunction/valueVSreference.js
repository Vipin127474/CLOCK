// how passing arguments works: VALUES vs REFERENCES

//--------> JAVASCRIPT DOES NOT HAVE PASSING BY REFERENCE, 
//ONLY PASSING BY VALUE, EVEN THOUGH IT LOOKS LIKE IS IS PASSING BY REFERENCE.

const flight='LH34';
const vipin={
    name: 'vipin singh',
    passport: 2242424242
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name='Mr.' + passenger.name;

    if(passenger.passport===2242424242)
{
    alert('check In')
}
else{
    alert('wrong passport')
}
}
checkIn(flight, vipin);
console.log(flight);
console.log(vipin);

// ---->flight

// flight is a primitive type. It's just a string and as we passed that value into
// the function down here, then the flightNum here is basically a copy 
// of that original value. so, flightNum contains a copy, and no simply the 
// original value of the flight variable. so it is just like this:

//const flightNum = flight

// So, flightNum here is a completely different variable. and therefore, as we
// changed it here, it did not get reflected in the outside flight variable  


// ----->vipin
// when we pass a reference type to a function, what is copied is just a 
// reference to the object in the memory heap. it is like this:

// const passenger=vipin

// when we try to copy an object like this, we are really only copying the
// reference to that object in the memory heap, but they both point to the 
// same object in memory. so, that is exactly what is also happening here,
// with the vipin object, aswe pass it into the checkIn function where it is 
// called passenger. SO, as we are manipulating the passenger object, it is 
// exactly the same as manipulating the vipin object because they both are same
// object in the memory heap



const newPassport=function(person){
    person.passport=Math.trunc(Math.random()*100000000);

}
newPassport(vipin);  // so here I change my passport before I checkIn
checkIn(flight, vipin);

// i am passing in an object, so that object here is then called person. 
// And as the function manipulates that person object, of course, it gets
// reflected in vipin and then as we pass that vipin object into the checkIn
// function then ofcourse that passport is no longer the same as the original
// one.

// this is the example of seeing how the interaction of different functions
//  with the same object can create some issues here.