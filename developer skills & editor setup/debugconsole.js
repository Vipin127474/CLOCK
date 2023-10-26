// debugging with console and breakpoints.

function measureKelvin(){
    const measurement={
        type: 'temp',
        unit: 'celcius',
// 3. fix
        // value:Number(prompt('Degrees celsius:'))
    // value: prompt('defrees celcius')
    value: 10
    };
    //2. find
    console.log(measurement);

    // console.log(measurement.value);
    // console.table(measurement);
    // console.warn(measurement.value);
    // console.error(measurement.value);
    const Kelvin=measurement.value + 273;
    return Kelvin;
};
//1. identify the bug
console.log(measureKelvin()); 


// USING A DEBUGGER(Sources in developer console)
function calcAmplitudeBug(t1, t2) {

    const temps=t1.concat(t2);
    console.log(temps);

    // bug
    // let max=0;
    // let min=0;
    
let max=temps[0];
let min=temps[0];

    for (let i = 0; i < temps.length; i++) {
           let currentemp=temps[i];
   

        //    debugger;// to start the debugger console
   if(typeof currentemp!=="number") continue;
   
   else if(currentemp>max)
   {            
   max=currentemp;
   }
   else if(currentemp<min)
   {
   min=currentemp;
   }
       }
       console.log(max, min);
   
       return max-min;
   };

   //1. IDENTIFY
const amplitudeBug=calcAmplitudeBug([3, 6, 10, 2], [5, 1, 7, 9]);
console.log(amplitudeBug);