// FOR CURRENCY
let str = "\u20B9" 
document.write("My symbol: " + str);

const account1={
    owner:'vipin singh',
    movements:[200, 600, 400, 5000, 270, -1000, -70, 644,],
    interestRate:1.5, // %
    pin:1111,

    movementsDates: [
      "2023-11-18T21:31:17.178Z",
      "2023-12-23T07:42:02.383Z",
      "2023-01-28T09:15:04.904Z",
      "2023-04-01T10:17:24.185Z",
      "2023-10-11T14:11:59.604Z",
      "2023-07-26T17:01:17.194Z",
      "2023-10-08T23:36:17.929Z",
      "2023-10-13T10:51:36.790Z",
    ],
    currency: "EUR",
    locale: "pt-PT", // de-DE
};

const account2={
    owner:'vikram batra',
    movements:[2005, 6500, 400, -100, 273, 1000, -170, -668,],
    interestRate:1.5, // %
    pin:2222,

    movementsDates: [ 
    "2023-11-01T13:15:33.035Z",
    "2023-11-30T09:48:16.867Z",
    "2023-12-25T06:04:23.907Z",
    "2023-01-25T14:18:46.235Z",
    "2023-02-05T16:33:06.386Z",
    "2023-04-10T14:43:26.374Z",
    "2023-06-25T18:49:59.371Z",
    "2023-07-26T12:01:20.894Z",
  ],
  currency: "INR",
  locale: "en-IN",
};

const account3={
    owner:'sandeep unnikrishna',
    movements:[7402, 6010, 900, -500, -2970, 15000, 710, 244,],
    interestRate:1.2, // %
    pin:3333,

    movementsDates: [
      "2023-11-01T13:15:33.035Z",
      "2023-11-30T09:48:16.867Z",
      "2023-12-25T06:04:23.907Z",
      "2023-01-25T14:18:46.235Z",
      "2023-02-05T16:33:06.386Z",
      "2023-04-10T14:43:26.374Z",
      "2023-06-25T18:49:59.371Z",
      "2023-07-26T12:01:20.894Z",
    ],
    currency: "USD",
    locale: "en-US",

};

const account=[account1, account2, account3];
// ELEMENTS

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


// const displayMovements=function(movements) {

//     // it will empty the container first. after empty the container 
//     // we start adding new elements using forEach LOOP
//     containerMovements.innerHTML='';   
//                   // OR                 
// // .textContent=0

//      movements.forEach(function(movement, i){

//         const type=movement>0 ? 'deposit' : 'withdrawal';


//      const html= `
//      <div class="movements__row">
//      <div class="movements__type movements__type--${type}">
//      ${i+1} 
//      ${type}</div>
//      <div class="movements__value">${movement}${str}</div>
//    </div>
//    `;   
//    containerMovements.insertAdjacentHTML('afterbegin', html);
//      });
//  };

// const displayMovements=function(movements, sort = false) {

//   // it will empty the container first. after empty the container 
//   // we start adding new elements using forEach LOOP
//   containerMovements.innerHTML='';   
//                 // OR                 
// // .textContent=0
// // so here if sort is true then we want it to sort if not then display the
// // movements

// // and here we can't sort like this "movements.sort()" otherwise sort method 
// // will then order the actual underlying array. we want only is to display
// // a sorted movements array but we do not want to sort the original underlying
// // data. SO we use slice method so then we can create a copy of the 
// // movements array 

// // ASCENDING ORDER
// const movs = sort ? movements.slice().sort((a,b) => a - b) : movements;

//    movs.forEach(function(mov, i){

//       const type=mov>0 ? 'deposit' : 'withdrawal';


//    const html= `
//    <div class="movements__row">
//    <div class="movements__type movements__type--${type}">
//    ${i+1} 
//    ${type}</div>
//    <div class="movements__value">${mov.toFixed(2)}${str}</div>
//  </div>
//  `;   
//  containerMovements.insertAdjacentHTML('afterbegin', html);
//    });
// };

const formatMovementsDate= function(date, locale){
  const CalcDaysPassed= (date1, date2) => 
 Math.round(Math.abs(date2-date1)/(1000*60*60*24));
  
  const daysPassed=CalcDaysPassed(new Date(), date)

  if (daysPassed===0) return 'TODAY'
  if (daysPassed===1) return 'YESTERDAY'
  if (daysPassed<=7) return `${daysPassed} days ago`

  else{
    // const day= `${date.getDate()}`.padStart(2,0)
    // const month= `${date.getMonth()}`.padStart(2,0)
    // const year= date.getFullYear()
    // return `${day}/${month}/${year}`
    
    return new Intl.DateTimeFormat(locale).format(date)
  }

}


const formatCurr=function(value, locale, currency){
return new Intl.NumberFormat(locale, {
  style:'currency',
  currency:currency,
}).format(value);
}

// here we use acc becuase we want "movementsDates" and everything in 
// those object so we use here entire object
const displayMovements=function(acc, sort = false) {
  
  // it will empty the container first. after empty the container 
  // we start adding new elements using forEach LOOP
  containerMovements.innerHTML='';   
                // OR                 
                // .textContent=0
                // so here if sort is true then we want it to sort if not then display the
                // movements

// and here we can't sort like this "movements.sort()" otherwise sort method 
// will then order the actual underlying array. we want only is to display
// a sorted movements array but we do not want to sort the original underlying
// data. SO we use slice method so then we can create a copy of the 
// movements array 

// ASCENDING ORDER
const movs = sort ? acc.movements.slice().sort((a,b) => a - b) : acc.movements;

// this is a common technique to loop over two array at the same time
// (movement and movementsDates)
   movs.forEach(function(mov, i){

      const type=mov>0 ? 'deposit' : 'withdrawal';

      
      // "i" is the current index of movements array and the same index
      // is then gonna point to the equivalent date in this movementsDates
      // array
      
      // the dates are coming from acc.movementsDates
      const date=  new Date(acc.movementsDates[i]);
      const displayDate = formatMovementsDate(date, acc.locale); 
     

   const formattedMov = formatCurr(mov, acc.locale, acc.currency)
      
   const html= `
      <div class="movements__row">
      <div class="movements__type movements__type--${type}">
      ${i+1} 
      ${type}</div>
   <div class="movements__date">${displayDate}</div>
   <div class="movements__value">${formattedMov}</div>
 </div>
 `;   
 containerMovements.insertAdjacentHTML('afterbegin', html);
   });
};




// displayMovements(account1.movements)

// here ${type} tell us whether it is depoist or withdrawl and we use it in
// class of html so then JS know about it that it is deposit or withdrawl



// CALCULATING BALANCE
// const calcDisplayBalance=function5(movements) {
//     const balance=movements.reduce((acc, mov) => acc
//      + mov, 0);
//     labelBalance.textContent=`${balance}${str}`;

// };
 
// we do same here as calcDisplaySummary
const calcDisplayBalance=function(acc) {
const balance=acc.movements.reduce((acc, mov) => acc+ mov, 0);
 acc.balance=balance    

    labelBalance.textContent=formatCurr(acc.balance, acc.locale, acc.currency);
};
// calcDisplayBalance(account1.movements)



// CREATING USERNAME
const createUserName=function(accounts){
accounts.forEach(function(acc){
    acc.username= acc.owner
    .split(' ')
    .map(name => name[0]) // here we want first letter of user 
    .join(''); // join gives here the result outside of an array
// console.log(acc);
});
};
createUserName(account);


// TO CALCULATING incomes, out, interest
// const calcDisplaySummary=function(movements){
// const incomes=movements
// .filter(mov => mov > 0)
// .reduce((acc, mov) => acc + mov, 0);
// labelSumIn.textContent=`${incomes}${str}`

// const out=movements
// .filter(mov => mov<0)
// .reduce((acc, mov) => acc + mov, 0);
// labelSumOut.textContent=`${Math.abs(out)}${str}`

// const interest= movements
// .filter(mov => mov > 0)
// .map(deposit => (deposit * 1.2)/100)
// .reduce((acc, interest) => acc + interest, 0);
// labelSumInterest.textContent=`${interest} ${str}`;
// }

// we change the above function becuase the interestRate is same for 
// every account functions so we need change interestRate dynamically 
// when the user login to his/her account

const calcDisplaySummary=function(accs){
    const incomes=accs.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent=formatCurr(incomes, accs.locale, accs.currency);
    
    const out=accs.movements
    .filter(mov => mov<0)
    .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent=formatCurr(out, accs.locale, accs.currency);
    
    const interest=accs.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * accs.interestRate)/100)
    .reduce((acc, interest) => acc + interest, 0);
    labelSumInterest.textContent=formatCurr(interest, accs.locale, accs.currency);
    }
// calcDisplaySummary(account1.movements);



const updateUI=function (acc) {
// we call all the functions in LOGIN because we want to display
// movements, balance and summary dynamically. at above all are not 
// displayed dynamically

      //DISPLAY MOVEMENTS
      // displayMovements(acc.movements)

      //  now we use here entire account 
      displayMovements(acc)
        
      //DISPLAY BALANCE
      // here we do the same as below one
      calcDisplayBalance(acc)
      
      //DISPLAY SUMMARY
      // we don't need this because in this function we call the entire
      // array but here we call movements
      // calcDisplaySummary(acc.movements)
      calcDisplaySummary(acc)
    }
    
    
const startLogoutTimer = function(){
  
  // Setting time to 5 min
const tick=function(){

    // const hour =String(Math.trunc(time / 3600)).padStart(2, 0);
    const min =String(Math.trunc(time / 60)).padStart(2, 0);
    const sec= String(Math.trunc(time % 60)).padStart(2, 0); 
  //in each call, print the remaing time to UI
  labelTimer.textContent = `${min} : ${sec}`;

  
  //when reach 0 seconds, stop timer and log out user
  
  // this part of the code here only gets triggered if the time is zero in 
  // this whole function and then user logout  
  if(time===0)
  {
    clearInterval(timer);
    labelWelcome.textContent='Log in to get started';
    containerApp.style.opacity=0;
  }
  //decrease 1 second
  time--;
}



let time=120;

  //call the timer every second
  // we did this because we want to call it immediately otherwise it takes some 
  // time to start a timer and it start with previous timer
  tick();
const timer=setInterval(tick, 1000);
return timer;
};


// EVENT HANDLERS

// These variables need to persist their values across different user 
// interactions and function calls that's why we declare them outside
let currentAccount, timer;


//                   FAKE ALWAYS LOGGED IN 
// so this way we don't have to always log in each time we want to do 
// something
// currentAccount = account1
// updateUI(currentAccount) 
// containerApp.style.opacity=100;

// EXPERIMENT INTERNATIONALIZATION




btnLogin.addEventListener('click', function(e) {
  //PREVENT FORM FROM SUBMITTING(LOGIN WILL DISPLAY IN CONSOLE IT DOES
 // NOT DISAPPEAR AFTER DISPLAY)
    e.preventDefault();
  

  currentAccount=account.find(
      acc => acc.username===inputLoginUsername.value);
      
      console.log(currentAccount);
      if(currentAccount?.pin=== +(inputLoginPin.value)){
        //DISPLAY UI AND WELCOME MESSAGE 
        
        labelWelcome.textContent=`Welcome Back, 
        ${currentAccount.owner.split(' ')[0]}`;
        containerApp.style.opacity=100;
    
// create current date and time
const now=new Date();
const options ={
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  // weekdays: 'long',
}

// it will tell the user system language
// const locale = navigator.language;
// console.log(locale);

labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale,options).format(now);
      

// const now = new Date();

        // // here in padStart 2 means it is 2charater long and we want to pad it 
        // // with a zero
        // const day=`${now.getDate()}`.padStart(2, 0)
        
        // //day/month/year
        // // here we add 1 because it is 0 based
        // const month=`${now.getMonth() + 1}`.padStart(2, 0)
        // const year=now.getFullYear()
        // const hours=now.getHours()
        // const min=now.getMinutes()
        // labelDate.textContent=`${day}/${month}/${year}, ${hours}:${min}`;
        
        


// clear input fields after login we use value here because we want to 
// remove the value of inputLoginUsername and inputLoginPin
inputLoginUsername.value = inputLoginPin.value = '';

// it is used bacause cursor blinking in the input field
//  so we use blur() so then that field loses its focus  
inputLoginPin.blur();


//TIMER

// in this we check we if there is already a time then clear that timer and 
// add the new timer(reset timer)
if(timer) 
clearInterval(timer)
// timer for LOGOUT
 timer = startLogoutTimer();


 // UPDATE UI
     updateUI(currentAccount)
      
      }
      else{
        window.alert("INVALID CREDENTIAL");
        }
});



// TRANSFER MONEY

btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = +(inputTransferAmount.value);
    const receiverAcc = account.find(
      acc => acc.username === inputTransferTo.value
    );
    inputTransferAmount.value = inputTransferTo.value = '';
  
    if (
      amount > 0 &&
      receiverAcc &&
      currentAccount.balance >= amount &&
      receiverAcc?.username !== currentAccount.username
    ) {

        // DOING TRANSFER
   currentAccount.movements.push(-amount);
   receiverAcc.movements.push(amount);


  //  Add transaction date
currentAccount.movementsDates.push(new Date().toISOString());
receiverAcc.movementsDates.push(new Date().toISOString());

   
    // UPDATE UI
   updateUI(currentAccount)

  //  Reset Timer
  clearInterval(timer);
  timer = startLogoutTimer();
} 
});




// DELETE ACCOUNT

btnClose.addEventListener('click', function(e){

  e.preventDefault();
  if(inputCloseUsername.value === currentAccount.username  && +(inputClosePin.value) === currentAccount.pin)
  {
    const index=account.findIndex(
      acc => acc.username === currentAccount.username);

// DELETE ACCOUNT
account.splice(index, 1)

// HIDE UI(LOGOUT)
containerApp.style.opacity=0;
}
inputCloseUsername.value = inputClosePin.value = ''
})


// REQUEST LOAN

btnLoan.addEventListener('click', function(e){
  e.preventDefault()
  
  const amount = Math.floor(inputLoanAmount.value)
  
  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount/10)){
   
    setTimeout(function(){
        // ADD LOAN IN DEPOSITS
    currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // UPDATE UI
    updateUI(currentAccount);

      //  Reset Timer
  clearInterval(timer);
  timer = startLogoutTimer();

    }, 3000)
    
  }
  inputLoanAmount.value = '';
})


// SORTING

// we want preserve the sorted state throughout all the clicks 
// that's why we will define a variable outside of function. this 
// function here is executed each time when we click the SORT button. 
// if we define variable in this function then it would be created newly 
// each time when we click the button

let sorted=false;

btnSort.addEventListener('click', function(e){
  e.preventDefault()
 
  // here we sort the array
displayMovements(currentAccount.movements, !sorted);

// here we do opposite of sorted array
sorted= !sorted

});

// We used a Array.from() to create an array from the result of the 
// querySelectorAll() which is a NodeList, which is not really an array,
// but an array like structure and that array like structure
// can easily be converted to an array using Array.from().
// And then as a second step, we even included a mapping function,
// which then forms that initial array to an array exactly as we want it.
// So basically converting the raw element to its text content
// and replacing the Euro sign with nothing.

labelBalance.addEventListener('click', function(){
  const movementsUI= Array.from(
   document.querySelectorAll('.movements__value'),
   el=> +(el.textContent.replace(str, '')) 
  );
  console.log(movementsUI);

// OR

  // console.log(movementsUI.map(el => el.textContent.replace(str, '')));

})

// this is another way to do the same thing that we do above but then we 
// have to do the mapping separately
const movementsUI2=[...document.querySelectorAll('.movements__value')];
console.log(movementsUI2);


// THIS IS EXAMPLE OF REMAINDER OPERATOR IN NUMBER, DATES.. SECTION

// IN THIS WE WANT TO GIVE BACKGROUND COLOR TO EVERY 2ND ROW 

// labelBalance.addEventListener('click', function(){

// this here will return a NODELIST and so lets convert it to 
// a real array so for that we use here spread operator 
//   [...document.querySelectorAll('.movements__row')].
//   forEach(function(row, i){
//    if(i % 2 === 0) 
//    row.style.backgroundColor='red';   
//    if(i % 2 != 0)
//    row.style.backgroundColor='lightred' 
//   });
// });