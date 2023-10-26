// FUNCTIONS ACCEPTING CALLBACK FUNCTIONS

// EXAMPLE 1
const oneWord=function (str) {
    return str.replace(/ /g, '').toLowerCase(); // to replace spaces in word
}

const upperFirstWord=function(str) {
    const [firstWord, ...othersWord] = str.split(' ');
return [firstWord.toUpperCase(), ...othersWord].join(' ');
}


// Higher-Order Function
const transformer= function(str, fn) {
    console.log(`Original String: ${str}`);
    console.log(`Transform String: ${fn(str)}`);
console.log(`Transformed by: ${fn.name}`); // it is the property that shows the name of the functions
}

transformer('javaScript is excellent', upperFirstWord);
transformer('javaScript is excellent', oneWord);

// Here, transformer is: higher order function
// upperFirstWord is : callback function 
// onetWord is : callback function


// EXAMPLE 2

//JS USES CALLBACK ALL THE TIME
const high5= function () {
    console.log(('🙋🏻‍♂️'));
  
}
document.body.addEventListener('click', high5);

// Here, addEventListener is: higher order function
// high5 is : callback function


             // IN LATER SECTION
['vipin', 'sam', 'adam'].forEach(high5);

// HERE IS 3 ELEMENTS THAT'S WHY THE OUTPUT IS 3 WAVING MAN EMOJI
// AND FOR EACH OF THEM THIS CALLBACK WILL BE CALLED



// why are callback functions so much used in javaScript and why are they so
// helpful?

// 1. it makes it(upperFirstWord) easy to split up our code into more reusable and 
// interconnected parts.

// 2. callback function allow to create abstraction
//  EX. transform() function does not care at all, how the string is
// Transformed. It does not care about this level for detail
 

// EXAMPLE 3

const upper= function(str) {
    return str.replace(str, 'this is replaced string').toUpperCase();
}



const transform1=function(str, func) {
    console.log(`transfromed string: ${func(str)}`);
}

transform1("hello everyone", upper);