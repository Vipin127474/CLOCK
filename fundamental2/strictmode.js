// strict mode is a special mode which makes to easier for us to write a secure code in javascript.
// we can activate a strict mode only for a specific funtion or a specific block
// secure means that strict mode makes it easier for us developer to avoid the accidental errors.
// 2 reasons:
// 1. strict mode forbids us to do certain things.
// 2. it creates visible error where in other situation javascript
// would just fail silently

'use strict';

let hasDriversLicense=false;
const passTest=true;

// this code has error
// if (passTest) hasDriverLicense=true;
// if(hasDriversLicense) console.log('i can drive');
 
// it is correct code
if (passTest) hasDriversLicense=true;
if(hasDriversLicense) console.log('i can drive');

// strict moded reserves these keywords because they can be used in future
// const interface='audio';
// const private=354;
// const if=23;