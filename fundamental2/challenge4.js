function calcTip(bill) {
    return bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;   
}

const bills=[10, 20, 30, 40, 50];
const tips=[];
const total=[];


for (let i = 0; i < bills.length; i++) {
    tips[i]=calcTip(bills[i]);
    console.log(`tip of bill is: ${tips}`);
}

for (let i = 0; i < bills.length; i++) {
    total[i]=bills[i]+tips[i];    
    console.log(`total amount of bill and tip is: ${total[i]}`);    
}

function calcAverage(arr) {
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
        sum=sum+arr[i];
    }
    // console.log(sum);
    return sum/arr.length
}
console.log(calcAverage([10,20,30,40]));