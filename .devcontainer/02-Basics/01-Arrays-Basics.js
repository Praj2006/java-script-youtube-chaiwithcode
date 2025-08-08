//node .devcontainer/02-Basics/01-Arrays-Basics.js
const myArr=[0,1,2,3,4,5]
const myHeroes=["IronMan","Hulk","Captain America","SpiderMan","AntMan","BatMan","WonderWoman"]
const myArr2=new Array(1,2,3,4)
console.log(myArr[1]);
//Arrays Methods
myArr.push(6)
console.log(myArr);
myArr.pop()
//myArr.unshift(0)
//myArr.shift()
console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));//index -1
// console.log(myArr.indexOf(3));//index 3
const newArr=myArr.join()
console.log(myArr)
console.log(newArr);

//SLICE AND SPLICE
console.log("A ",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

const myn2=myArr.splice(1,3)
console.log(myArr);
console.log("C ", myArr)




