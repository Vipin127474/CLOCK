// SetTimeout and SetInterval 

// SET TIMEOUT
// simply schedules a function to run after a certain amount of time,
// but the callback function is only executed once

// The execution of code does not wait for the this function instead it runs 
// the code until the the time out 
const arr = ['🥒', '🧅', '🍅', '🥦'];

const burger=setTimeout((ing1, ing2, ing3, ing4) => console.log(`here is your 🍔 with ${ing1},${ing2}, ${ing3} and ${ing4}`), 
3000, ...arr);
console.log('waiting...');

// here we cancel the settimeout if there is cauliflower in burger
if(arr.includes('🥦'))
clearTimeout(burger);


// SET INTERVAL
// in this the time can run over and over again
setInterval(function() {
    // const now = new Date();
    // console.log(now.getHours());
    // console.log(now.getMinutes());


    const date = new Date();
    
    const options ={
        hour: 'numeric',
        minute: 'numeric',
        second:'numeric',
      }
      
      
    const inter = new Intl.DateTimeFormat(navigator.language, options).format(date);
    console.log(inter);
}, 1000);



// const tick =function(){
//   let time = 500;

//   const hour =String(Math.trunc(time/3600)).padStart(2,0)
//   const min = String(Math.trunc(time/60)).padStart(2,0)
//   const sec = String(Math.trunc(time % 60)).padStart(2,0)

//   console.log(`${hour} : ${min} : ${sec}`);
// time--
// }
// tick();
// const timer = setInterval(tick, 1000)






