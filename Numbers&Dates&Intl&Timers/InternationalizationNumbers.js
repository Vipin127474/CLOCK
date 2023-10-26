// INTERNATIONALIZATION NUMBERS

const num=3433433.23;

const options={
    // style:'unit',
    // unit:'celsius',

    // style:'percent',
    
    style:'currency',
    currency:'EUR',
    // useGrouping:false,

}

console.log('US:',new Intl.NumberFormat('en-US',options).format(num));
console.log('GERMANY:',new Intl.NumberFormat('de-DE',options).format(num));
console.log('SYRIA:',new Intl.NumberFormat('ar-SY',options).format(num));
console.log('BROWSER:',new Intl.NumberFormat(navigator.language,options).format(num));

