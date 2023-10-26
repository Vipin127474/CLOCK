ALL ARRAY METHOD TO USE ?

1.                TO MUTATE ORIGINAL ARRAY

add to original array:
.push()-->(end)
.unshift() -->(start)


remove from original:
.pop() -->(end)
.shift() -->(start)
.splice() -->(any)

others:
.reverse() 
.sort() 
.fill() 

2.                     A NEW ARRAY

computed from original:
.map()-->(LOOP)

filteres using condition:
.filter()

portion of original:
.slice()

adding original to other:
.concat()

flattening the original:

.flat()
.flatMap()

3.                   AN ARRAY INDEX

based on value:
.indexOf()

based on test condition:
.findIndex()

4.                   AN ARRAY ELEMENT

based on test condition:
.find()


5.             KNOW IF ARRAY INCLUDES ELEMENTS

based on value:
.includes()

based on test condition:
.some()
.every()

6.                    A NEW STRING

based on separator string:
.join()

7.           TO TRANSFORM TO VALUE

based on accumulator
.reduce()(it converts the array into a single value)

// (boil down array of single value of any type: number, string, boolean, 
// or even new array or object)

8.           TO JUST LOOP ARRAY

based on callback
forEach()

// (DOES NOT CREATE A NEW ARRAY JUST LOOP OVER IT)
