const flights=
"_Delayed_Departure;fao93766109;txl233758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel749299980;fao93766109;12:05+_Departure;fao93766109;lis232369855;12:30" 

// here we refactor the code
const getCode= str => str.slice(0,3).toUpperCase();

// console.log(flights.split('+'));

// we can write above console technique like this in below
for (const flight of flights.split("+")) {
    //  console.log(flight);
    const [type, from, to, time] =flight.split(';');
    
    // here we refactor the code of 'from' and 'to'
    const output=`${type.startsWith('_Delayed') ? '🎈' : ''}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(44 );
console.log(output);
}

