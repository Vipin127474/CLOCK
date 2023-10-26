// OPERATIONS WITH DATES


const future = new Date(2033, 11, 20, 14, 14);
console.log(+future);

const daysPassed= (date1, date2) => Math.abs(date2-date1)/(1000*60*60*24);

const day=daysPassed(new Date(2033, 12, 29), new Date(2033, 11, 29))
console.log(day);