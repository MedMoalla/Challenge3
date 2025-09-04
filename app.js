
const calcTip = bill => {
    if(bill >= 50 && bill <= 300  ) return bill * 0.15 
    else return bill * 0.2
}
console.log("The Tip is " , calcTip(100))

const bills = [125 , 555 , 44];

const tips = [calcTip(bills[0]) , calcTip(bills[1]), calcTip(bills[3])]
for (let i = 0 ; i < tips.length ; i++ ) {
    console.log(tips[i]);
}


const total = [];
for ( let i = 0 ; i < tips.length ; i++){
    total.push(tips[i] + bills[i])
}
console.log(total)