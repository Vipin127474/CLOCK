// CREATING DATES

// There are four ways of creating dates

// 1. use the new date constructor like this
// const now = new Date()
// console.log(now);

// 2. To parse the date from a date string
// here we give date then it automatically parse the time based on that
// console.log(new Date('Sun Oct 08 2023 15:06:23'));
// console.log(new Date('December 24, 2022'));


// const account1 = {
//     owner: "Jonas Schmedtmann",
//     movementsDates: [
//       "2019-11-18T21:31:17.178Z",
//       "2019-12-23T07:42:02.383Z",
//       "2020-01-28T09:15:04.904Z",
//       "2020-04-01T10:17:24.185Z",
//       "2020-05-08T14:11:59.604Z",
//       "2020-07-26T17:01:17.194Z",
//       "2020-07-28T23:36:17.929Z",
//       "2020-08-01T10:51:36.790Z",
//     ],
//   };
  
//   const account2 = {
//     owner: "Jessica Davis",
//     movementsDates: [
//       "2019-11-01T13:15:33.035Z",
//       "2019-11-30T09:48:16.867Z",
//       "2019-12-25T06:04:23.907Z",
//       "2020-01-25T14:18:46.235Z",
//       "2020-02-05T16:33:06.386Z",
//       "2020-04-10T14:43:26.374Z",
//       "2020-06-25T18:49:59.371Z",
//       "2020-07-26T12:01:20.894Z",
//     ],
//   };
  
//   const accounts = [account1, account2];
  
// console.log(new Date(account1.movementsDates[1]));

// console.log(new Date(2032, 10, 19, 15, 23, 7));

// JS AUTOCORRECT THE DATE 
// here we give 31 november but there is only 30 days in november
// console.log(new Date(2032, 10, 31));

// here we get 1 january 1970
// console.log(new Date(0));

// convert days to milliseconds(date after 3 days of 1 january 1970)
// console.log(new Date(3 * 24 * 60 * 60 * 1000));


// so these dates we just created here are just another special 
// type of object and so therefore they have their own methods, just 
// like arrays, or maps, strings

// Working with dates

const future = new Date(2032, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());

// this one is zero based so 10 is actually the month number 11
console.log(future.getMonth());

console.log(future.getDate()); 

// it is not the day of the month but day of week
// and 0 here is sunday so friday is 5
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());

// it is ISO string which follows some kind of international standard 

// it is useful when you convert a particular date object into a strings
// that you can then store somewhere
console.log(future.toISOString());

// TIMESTAMP(milliseconds) FOR THE DATE
console.log(future.getTime()); //1984470780000

const convert = new Date(1984470780000);
console.log(convert);

// it is used to get TIMESTAMP of current date 
console.log(Date.now());

// SET
future.setFullYear(2222);
future.setDate(22);
console.log(future);