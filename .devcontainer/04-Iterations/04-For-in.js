//node 04-Iterations/04-For-in.js
const myobject ={
    js:'JavaScript',
    cpp:'C++',
    rb:'ruby',
    swift:'Swift by apple'
}
for (const key in myobject) {
    //console.log(`${key} shortcut for ${myobject[key]}`);
}

const programming=["Js","rb","Cpp","Py","Java"]
for (const key in programming) {
   // console.log(key);
}
const map= new Map()
map.set('IN',"India")
map.set('USA',"Unites States of America")
map.set('FR',"France")
map.set('IN',"India")
for (const key in map) {
   console.log(key);
}
//Not itretable