//For of
//["","",""]
//[{},{},{}]
//node 04-Iterations/03-For-of-in.js
const arr =[1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
}
const greetings="Hello World!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}
//MAPS
const map= new Map()
map.set('IN',"India")
map.set('USA',"Unites States of America")
map.set('FR',"France")
map.set('IN',"India")
//Unique hoti h 
//Jis order mai Daloge usi order mai milegi
//console.log(map);
for (const [key,value] of map) {
   // console.log(key,':-',value);
}
const myobject={
'game1':'NFS',
'game2':'SpiderMan',
'game3':'Machine Learing',
'game4':'Artifical Intelligence'
}
//for (const [key,value] of myobject) {
    //console.log(key,':-',value);

//It is not iretable