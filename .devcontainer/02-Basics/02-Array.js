//node .devcontainer/02-Basics/02-Array.js
const marvel_Heroes=["Thor","IronMan","SpiderMan"]
const Dc=["SuperMan", "Flash", "BatMan"]
// marvel_Heroes.push(Dc)
// console.log(marvel_Heroes); //[ 'Thor', 'IronMan', 'SpiderMan', [ 'SuperMan', 'Flash', 'BatMan' ] ]

// const y =marvel_Heroes.concat(Dc)
// console.log(y); 
/*[
  'Thor',
  'IronMan',
  'SpiderMan',
  [ 'SuperMan', 'Flash', 'BatMan' ],
  'SuperMan',
  'Flash',
  'BatMan'
]
*/
const all_new_heores=[...marvel_Heroes,...Dc]
console.log(all_new_heores);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Hitesh"}));//INTERESTING

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));

