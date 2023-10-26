// Primitives VS Objects (Primitive VS Reference Types)

// Primitives(numbers, strings, booleans etc)

let age=30;
let oldAge=age;
age=31;

console.log(age); //31
console.log(oldAge); //30

// the oldAge still 30 because we store the age in oldAge when age is 30 
// and the new age not affect the oldAge


// Objects

const me={
    name:'vipin',
    age: 30,
};

const friend=me;
friend.age=21;

console.log(friend); 
console.log(me);

// both show age 21 and name vipin and this is source of confusion


//---> Primitives, Objects and the javascript engine
--Primitives                            --Objects
Number                                 Object literals
string                                   Arrays            
boolean                                  Functions
Undefined                                 many more
Null 
Symbol
Bigint


when we are talking about memory and memory management,
we call Primitive datatypes

and Objects Reference types because of the different way
in which they are stored in memory 


Primitives are stored in the call stack because that's where execution context run
Objects are stored in a heap


now we have to check why the Object's code give us weird behaviour. 
so here we have both Primitives and Objects code.

// -- Primitives
let age=30;
let oldAge=age;
age=31;

console.log(age); //31
console.log(oldAge); //30


so here this code is stored in a call stack.

firstly,

identifier           address         value 
age                   0001             30
oldAge                0002             31

so here the identifier point to the address instead of value 
but we thought that identifier equals to value but not it equals to address which holds the value of 30.

then the oldage is also point to the address as the age identifier point.

then the value of age is changed and again it points to the address that is 0002 and becomes equals to the value 31.

and both return the value in the console that we expect from it.


// -- Objects
const me={
    name:'vipin',
    age: 30,
};

const friend=me;
friend.age=21;

console.log(friend); 
console.log(me);

firstly,

call stack

identifier           address         value 
me                    0003           D30F
friend



heap

address            value
D30F              {
                 name:'vipin',
                 age:30, 
                }  

when a new object is created such as this Me object,
it is stored in the heap.
And such as before there is a memory address                           
and then the value itself.

now in the case of Reference values like this me Object the me identifier does not actually point directly to the newly created
memory address in the heap. so in this example D30F

instead it will point to a mew piece of memory that's created in the
stack and this new piece of memory wil then point to the Object
that's in the heap by using the memory address as its value 


the stack just keeps a Reference to where the Object
is actually stored in the heap so that it can find
it whenever necessary.

just like with the Primitive values the friend identifier wil 
point to the exact same memory address as the me 
identifier.
and again that address contains the Reference, which then points to the
object itself.
 and like this the friend object is now essentially the exact
 same as the me object.


 now when we change the value of age in friend the friend identifier
show the correct value 21 but the me identifier show the weird behaviour
it also affect its age and it becomes 21. it happens
because the me and friend identifier point to the exact same object in 
the memory heap. so whenever we change something in this object,
it will always be refelected in the friend and in me.


one important implication of this is that whenever you 
think that you are copying an object, you really just
creating a new variable that points to the exact same Object 