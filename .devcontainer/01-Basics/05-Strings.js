const name="Prashant"
const repoCount=50
//node .devcontainer/01-Basics/05-Strings.js
// console.log(name +repoCount+ " Value");
console.log(`Hello my name is ${name} and repo count is ${repoCount}`);

const gameName= new String('Prashant-hc')
console.log(gameName[0])
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-6,6)
console.log(anotherString);

const newString1="  PRASHANT     "
console.log(newString1);
console.log(newString1.trim());

const url="https://hitesh.com/hitesh%20choudhary"
url.replace('%20','-')
console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'))

//https://www.youtube.com/watch?v=n92qIk6nU84&list=RD5RZws-BEl4s&index=8
const gameName1="Prashant-hc-com"
console.log(gameName1.split("-"));

