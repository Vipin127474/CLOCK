
// 1. understanding the problem
// [17, 21, 23] will print "... 17ºC in 1 
// days ... 21ºC in 2 days ... 23ºC in 3 days ...
//arrays transfromed into string.
//--what is the x days? Answer--index+1

// 2. Breaking up into sub problems
//--transfrom array into string
// -- transform each element to string with celcius
// -- String needs to contain day(index+1)
//--Add ... between elements and start and end of string

// data1=[17, 21, 23];
// data2=[12, 5, -5, 0, 4];

// function printForecast(arr) {
// let str='';
//  for (let i = 0; i < arr.length; i++) {
//      str=str+`${arr[i]} in ${i+1} days...`;
//  }   
//  console.log("..." + str);
// }
// printForecast(data2);
//

let str="hello";
let rev=""
let len=str.length;
for (let i = 0; i < len; i++) {  
    rev=rev+str[len-i-1];      
    }
    console.log(rev);
      
// i=0 ; i<5; i++
 // rev=""+str[5-0-1]  rev=4   rev=4+[5-1-1]  rev=7  rev=7+str[5-2-1]

 