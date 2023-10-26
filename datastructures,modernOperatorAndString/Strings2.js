const airline='AIR INDIA';
const plane='I098';


// 1. toLowerCase()
console.log(airline.toLowerCase());

// 2. toUpperCase()
console.log(airline.toUpperCase());


// directly use om elements
console.log('vipin'.toUpperCase());


// EXAMPLE:
// FIX CAPITALIZATION IN NAME
// const passenger="rOhaN"; // Rohan
// 1. convert in lowercase 
// const passengerLower=passenger.toLowerCase();

// 2. convert first character into UpperCase and rest of the string
// in lower case then join them together
// const passengerCorrect=passengerLower[0].toUpperCase() + 
// passengerLower.slice(1);

// console.log(passengerCorrect);


// using function
const passenger= function(name) {
   const passengerWrong=name;
   const passengerLower=passengerWrong.toLowerCase();
   const passengerCorrect=passengerLower[0].toUpperCase() + 
   passengerLower.slice(1);
   console.log(passengerCorrect);
}

 passenger("sORab");
 passenger("harSH");
 passenger("anKiT");
 

// EXAMPLE:

// COMPARING EMAILS
const email='theenderbeast71@gmail.com';
const loginEmail= '  TheEnderBeast71@gmail.com \n';

// const lowerEmail=loginEmail.toLowerCase();
// const trimEmail= lowerEmail.trim();
// console.log(trimEmail);
 

//                OR 

// another way to convert in lowercase and trim the string
const normalizedEmail= loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// compare emails here
console.log(email===normalizedEmail);


//3. replace: it works on first occurence of character or string and 
// replace it with another string with which you want to change. it is case sensitive also.

const priceIN='400,00rs';
const priceUS=priceIN.replace('rs', '$').replace(',', '.');
console.log(priceUS);


const announcement= "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replace('door', 'gate'));

//4.replace all: it replace all characters or string with which you want to replace.
console.log(announcement.replaceAll('door', 'gate'));

// 5. regular expression: through this you can replace all the string or characters with anothers string with which you want to replace

// g: means global here
console.log(announcement.replace(/door/g, 'gate'));



// 3 simple methods which returns Booleans

//6 includes: it gives us boolean value that the character or string is present in the string or not
const plane1='Air 230INDIA';
console.log(plane1.includes('A'));
console.log(plane1.includes('BI'));


// 7. startsWith(): it also gives us boolean value that the string is starts with the given charater or not 
console.log(plane1.startsWith('Air'));

//8. endsWith(): it also gives us boolean value that the string is ends with the given charater or not
if(plane.startsWith('Air') && plane.endsWith('INDIA')){
    
    console.log("PART OF THE NEW AIR INDIA FAMILY");
}


// practice exercise

const checkBaggage = function(items){
const baggage=items.toLowerCase();
if(baggage.includes('knife') || baggage.includes('gun')){
    console.log('You are not allowed on Board');
}
else{
    console.log('You are allowed on Board');
}
}

checkBaggage('I have a laptop, pocket Knife');
checkBaggage('Got some snacks and a Gun for protection');
checkBaggage('Got some snacks');