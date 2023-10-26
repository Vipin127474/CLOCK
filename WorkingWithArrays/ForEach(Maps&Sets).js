// FOR EACH LOOP IN MAPS AND SETS

// MAPS

const currencies= new Map([
    ['USD', 'United States Dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound Sterling'],
]);

// here we have array of array,  ['USD', 'United States Dollar'] will be 
// one entry of the map

currencies.forEach(function( value, key, map){
console.log(`${key}: ${value}`);
});

// first parameter is current value
// second parameter is key
// third parameter is map

// SETS

const currenciesUnique= new Set(['USD', 'EUR', 'USD', 'GBP', 'EUR']);

console.log(currenciesUnique);

currenciesUnique.forEach(function(value, key, set){
    // both are same
    console.log(`${key}:${value}`);
    console.log(`${value}:${value}`);
})

// in this value is key means that "USD:USD". why is it happend

// becuase a set does not have keys, here key parameter does not have sense to
// be here. but we can use it here, so we can set here function(value, _, set)