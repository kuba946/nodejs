// const add = (x,y) => x+y;
// const division = (number1, number2) => number1/number2;

// const math = (a,b,callback) => {
//     console.log(callback(a,b))
// }

// math(3, 4, add)

// setTimeout(()=> console.log("co u ciebie"), 2000);
// console.log("witaj");

const fs = require('fs');
fs.readFile('./tekst.txt', 'utf8', (err, file)=>console.log(file));