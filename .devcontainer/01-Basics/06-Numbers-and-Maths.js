//node .devcontainer/01-Basics/06-Numbers-and-Maths.js
const score=400
console.log(score);
const Balance = new Number(100)
console.log(Balance);
console.log(Balance.toString());
console.log(Balance.toString().length);
console.log(Balance.toFixed(2));

const otherNumber=23.8966
console.log(otherNumber.toPrecision(3));

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'));

// *******************************MATHS***************************************************
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3))
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(4.6,6,3,8));
console.log(Math.max(4.6,6,3,8));
console.log(Math.random());
console.log((Math.random()*10 )+1);
const min=10;
const max=20;
(Math.random()*(max-min +1)) + min