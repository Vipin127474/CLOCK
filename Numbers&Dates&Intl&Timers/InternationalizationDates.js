// INTERNATIONALIZATION(APIs) DATES

// it allow us to easily format numbers and strings according to different 
// languages


// in this lecture we gonna formatting dates and numbers

// BANKIST APP
const now=new Date()
labelDate.textContent = new Intl.DateTimeFormat('en-IN').format(now)


const options ={
    hours: 'numeric',
    minutes: 'numeric'
}


// BANKIST APP
// it will tell the user system language
const locale = navigator.language;
console.log(locale);

const now=new Date();
const options ={
  hours: 'numeric',
  minutes: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekdays: 'long',
}
labelDate.textContent = new Intl.DateTimeFormat(locale,options).format(now);
