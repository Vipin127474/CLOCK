// switch statements
// it is alternative way of ifelse conditon to comapre the value

// example different activities for a week

const day="wednesday";

// =========>>>>>> swtich conditon

// switch (day) {
//     case 'monday': // day==='monday
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         // without break the loop is executed further without stoping on one case
//         break;

//         case 'tuesday':
//             console.log('prepare theory videos');
//             break;


//         case 'wednesday':
//         case 'thursday':
//             console.log('write code examples');
//             break;
        
//         case 'friday':
//             console.log('record videos');
//             break;
        
//         case 'saturday':
//         case 'sunday':
//             console.log('enjoy the weekend');
//             break;

//         default:
//             console.log('not a valid day');    
//         }


// =====>>>>>>  if/else condition

if(day==="monday")
{
    console.log("exercise");
}
else if(day==="tuesday")
{
    console.log("study");
}
else if (day==="wednesday" || day==="thursday") {
    console.log("holiday");
}
else if (day==="friday") {
    console.log("tv");
}
else if (day==="saturday" || day==="sunday") {
    console.log("enjoy the weekend");
}
else{
    console.log("not valid day");
}