const str = 'ahb acb aeb aeeb adcb axeb';
let regA = /a.b/g;
console.log(str.match(regA));


const str2='2 + 3 223 2223';
let reg =/2 \+ 3/g;
console.log(str2.match(reg));

let currentDate = new Date();
console.log("Day: "+ currentDate.getDate());
console.log("Month: "+(currentDate.getMonth()+1))
console.log("Year: "+currentDate.getFullYear());