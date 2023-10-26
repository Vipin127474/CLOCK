
// 1. split()

console.log('a+very+nice+string'.split('+'));
console.log('vipin singh'.split(' '));

const [firstName, lastname]='vipin singh'.split(' ');
console.log([firstName, lastname]);

// 2. Join()
const newName=['Mr.', firstName, lastname.toUpperCase()].join(" ");
console.log(newName);

// const newName=['Mr.', firstName, lastname.toUpperCase()].join('--');
// console.log(newName);


// in this we capitalize all first letter of string 

const capitalizeName=function(name) {
const names=name.split(' ');
const namesUpper=[];
for (const n of names) {
//  namesUpper.push(n[0].toUpperCase() + n.slice(1)) // push, slice and toUpperCase

//               OR

namesUpper.push(n.replace(n[0], n[0].toUpperCase())) // replace, toUpperCase and push
}
console.log(namesUpper.join(' '));
};
capitalizeName('jesscia ann smith davis');
capitalizeName('vipin singh');



//3. padding a string:: means to add number of characters to the string until
// the string has a certain desired length

// padStart(25, '+'): 25 means that to make
// length of string 25 and to make string 25 length add '+' in it

const message ='go to gate 23!';
console.log(message.padStart(25, '+'));
console.log('vipin'.padStart(25, '+'));

// padEnd(30, '+'): means that the padEnd add '+' 
// to increase length of the string
console.log(message.padStart(25, '+').padEnd(30, '+'));


const maskCreditCard= function (number) {
 
    const str= number + '';  // here we convert Number to String
const last = str.slice(-4);
return last.padStart(str.length, '*')
}
 
console.log(maskCreditCard(8878977));
console.log(maskCreditCard('35835735935'));
console.log(maskCreditCard(0990986878785678));


// 4. Repeat
const message2 = 'bad weather... All departues delayed...\n';
console.log(message2.repeat(4));

const planeInLine= function (n) {
    console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
}

// here it shows the number of planes are waiting in the line it means the repeat
planeInLine(5);
planeInLine(4);