// MAPS: FUNDAMENTALS

// 2.MAPS

//MAPS ARE ALSO ITERABLE. SO FOR LOOP ALSO AVAILABLE FOR THEM

// it is used to map values to keys. so just like an object data is stored in 
// key value pairs in maps

// difference between maps and objects is that in maps, the keys can have
// any type 

// so in objects the keys are basically always strings but in maps there is any
// type of key. it could be objects, or arrays, or other maps


// easiest way to create a map is to actually create an empty map
// then fill up the map we can use the set() methods
const restaurent= new Map();

// the set method is used to add the key value pair in map and the set
// method actually returns the updated map

restaurent.set('name', 'taj hotel');
restaurent.set(1, 'mumbai , india');
console.log( restaurent.set(2, 'las vegas , america'));

// here we make chain of set method and it returns the updated map
restaurent
      .set('categories', ['italiano', 'indian', 'chinease', 'non veg'])
      .set('open', 12)
      .set('close', 24)
      .set(true, 'we are open')
      .set(false, 'we are closed')
      

// order to read data from a map we use the get() method
console.log( restaurent.get('name'));
console.log( restaurent.get(true));
console.log( restaurent.get(1));

// console.log( restaurent.get('true'));// undefined because above we define it as a key for another value.


// example = we want to get time from javascript. according to time we want values
// from above true amd false key
const time= 21;
console.log( restaurent.get(time > restaurent.get('open') && time < restaurent.get('close')));


// the property is present or not
console.log(restaurent.has('categories'));

// to delete property
restaurent.delete(2)
console.log(restaurent);

// to check size of maps
console.log(restaurent.size);

//clear all properties from maps
// restaurent.clear();
// console.log(restaurent);


// EXAMPLE
// we can use arrays and objects as map keys

// if we want to make it work then we create an array and then we use that array
const arr=[1,2]
restaurent.set(arr, 'test')

// restaurent.set([1,2], 'test')
console.log(restaurent);

//we wrote them in the same way and so they have the same elements 
// they are not the same object in the heap
console.log(restaurent.get([1,2])); // undefined 

// now it work because these two refer to the same place in memory
console.log(restaurent.get(arr)); 

restaurent.set(document.querySelector('h1'), 'heading');
console.log(restaurent);