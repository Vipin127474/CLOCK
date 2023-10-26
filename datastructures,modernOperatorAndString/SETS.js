// IN ESX TWO MORE DATA STRCUTURE INTRODUCED: SETS & MAPS

// 1. SETS
// it is a collection of unique values. so it has no duplicate values.
// SETS ARE ITERABLES

const orderSet=new Set([
    'pasta', 
    'pizza', 
    'pizza', 
    'pasta', 
    'risotto']);

    console.log(orderSet); // result is only 3 values are in set and 
                            //   duplicates are gone


//  IT IS LIKE AN ARRAY BUT IT IS STILL DIFFERENT FROM AN ARRAY BECAUSE ITS 
//  ELEMENTS ARE UNIQUE AND THE ORDER OF ELEMENTS IN THE SET IS IRRELEVANT

// Strings are also iterable
console.log(new Set('John'));


// for size of set
console.log(orderSet.size);

// for presence of element in set if it is then true or if not then false
console.log(orderSet.has('pizza'));
console.log(orderSet.has('bread'));


// for adding the elements
orderSet.add('bhaat');
orderSet.add('bhaat'); //here the second one is ignored by set when first one is selected
console.log(orderSet);

// for delete the element from set
orderSet.delete('pizza');
console.log(orderSet);

// for delete all elements from set
// orderSet.clear();
// console.log(orderSet);


// sets are iterable becuase we can loop over them
for(const order of orderSet)
{
console.log(order);
}


// the use case of sets is to remove duplicate values of arrays
//EXAMPLE

const staff=['waiter', 'chef', 'manager', 'chef', 'waiter'];

// in this all elements which are duplicates and present in staff
// but we want only unique array of these elements

// const staffUnique= new Set(staff);

// we want all elements in am array then we use spread
// operator
const staffUnique= [...new Set(staff)];
console.log(staffUnique);
console.log();