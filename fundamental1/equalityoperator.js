// == operator vs === operator


// === operator when there is exactlu equal value and equal type
// it does not perform type coersion
const age=18;
if (age===18) {
    console.log('you just became an adult');
}


// == operator which show us that the value is equal or not
// it performs the type coersion
const ages="12";
if(ages==12)
{
    console.log("yes equal");
}
else{
    console.log('not equal');
}

// in this example we use prompt that we learn about further
// if we use here === operator nothing will show because the value is string
// if we want to run === operator then we have to use Number() here.


// const favourite=prompt("What's your favourite number?");
const favourite=Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

// if(favourite==23)
if(favourite===23)// '23'===23
{
    console.log('cool! 23 is an ammazing number!');
}
else if(favourite===7)
{
    console.log('7 is also a cool number');
}
else{
    console.log('number is not 23 or 7');
}

// here we use != and !== operator
if(favourite!==23)
{
    console.log('why not 23?');
}