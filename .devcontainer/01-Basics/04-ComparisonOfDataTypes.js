/*
console.log(2>1) //TRUE
console.log(2>=1) //TRUE
console.log(2<1) //FALSE
console.log(2==1) // FALSE
console.log(2!=1) //TRUE
*/
console.log("2">1);
console.log("02">1)

console.log(null>0); // FALSE
console.log(null<0); // FALSE
console.log(null==0); // FALSE
console.log(null!=0); // TRUE
console.log(null>=0); // TRUE
/*
The reason is that an equality chcek== and comparisons >,<,>=,<= worls differently
Comparisons convert null to a number,treating it as 0.
That's why (3) null>=0 is true and (1) null>0 is false
*/
console.log(undefined>0); // FALSE
console.log(undefined<0); // FALSE
console.log(undefined==0); // FALSE
console.log(undefined!=0); // TRUE
console.log(undefined>=0); // FALSE
// === "STRICT CHECK"
console.log("2"===2);//FALSE
