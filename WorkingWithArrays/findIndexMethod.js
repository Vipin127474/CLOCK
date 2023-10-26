// BANKIST APP

// FINDINDEX MEHTOD
// FINDINDEX METHOD WORKS LIKE THE FIND METHOD BUT THE FINDINDEX RETURNS THE
// INDEX OF THE FOUND ELEMENT NOT THE ELEMENT ITSELF

const account1={
    owner:'vipin singh',
    movements:[200, 600, 400, -500, 270, -1000, -70, 644,],
    interestRate:1.5, // %
    pin:1111,
};

const account2={
    owner:'vikram batra',
    movements:[2005, 6500, 400, -100, 273, 1000, -170, -668,],
    interestRate:1.5, // %
    pin:2222,
};

const account3={
    owner:'sandeep unnikrishna',
    movements:[7402, 6010, 900, -500, -2970, 15000, 710, 244,],
    interestRate:1.2, // %
    pin:3333,
};

const account=[account1, account2, account3];

btnClose.addEventListener('click', function(e){

    e.preventDefault();
    if(inputCloseUsername.value === currentAccount.username  && Number(inputClosePin.value) === currentAccount.pin)
    {

    //   from account array
      const index=account.findIndex(
        acc => acc.username === currentAccount.username);
  
  // DELETE ACCOUNT
  account.splice(index, 1)
  
  // HIDE UI(LOGOUT)
  containerApp.style.opacity=0;
  }
  inputCloseUsername.value = inputClosePin.value = ''
  })
  
  
   