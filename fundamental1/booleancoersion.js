// truthy and falsy values

// 5 falsy values: 0, '', undefined, null, NaN.
// all of these five values will be converted to false when when
// attempt to convert them to a boolean. They are not exactly false
// initially but they will become falsue ehrn converted to a boolean.
//So, this is called falsy values.
// and everything else are called truthy values.

// concept of truthy and falsy values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

// javascript do type coersion to booleans and it happens in two scenerios

// 1.when using logical operators.
// 2.a logical contect like for example, when using if else condition.

const money=0;
// here the money is 0 and 0 converted to false so the if condition
// become false and the else condition will be executed.
if(money)
{
    console.log('don not spend it all');
}
else{
    console.log('you should get a job');
}



// example that the variable is defined or undefined.

// here the height is undefind because we din't assign a value to it
// so the height is false and the if condition also false and the else id executed
let height;
if(height)
{
    console.log('yah! height is defined');
}
else{
    console.log('height is undefined');
}