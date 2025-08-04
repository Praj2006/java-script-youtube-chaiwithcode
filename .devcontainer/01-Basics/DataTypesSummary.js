// #PRIMITIVE DATATYPE
/*
There are 7 types of Primitive DataType
1.String
2.Number
3.Boolean
4.Null
5.Undefined
6.Symbol
7.BigInt
*/
const score=100;
const score1=false;
/*
JavaScript is a dynamically typed language.
This means that:
Type checking occurs at runtime:
The type of a variable is determined when the code is executed, not during a separate compilation phase.
No explicit type declarations:
When declaring variables in JavaScript, you do not need to specify their data type (e.g., number, string, boolean). The interpreter infers the type based on the value assigned.
Variable types can change:
A single variable can hold values of different types throughout its lifetime in a program. For example, a variable initially holding a number can later be assigned a string.
In contrast, statically typed languages (like Java or C++) require you to declare the data type of a variable before compilation, and type checking happens at compile time. This means a variable's type cannot change during runtime.
*/
const isLoggedIn=false
const outsideTemp=null
let userEmail;

const Id=Symbol('123')
const anotherId=Symbol('123')

console.log(Id===anotherId) // FALSE
const bigNumber=23245565574666n
// #REFERENCE TYPE(NON PRIMITIVE)
/*
1.Array
2.Objects
3.Functions
*/
const heores=["SHAKTIMAN","NAAGRAJ","DOGA"]
let myObj={
    name:"PRASHANT RAJ",
    age: 19,
}
const myFunction=function(){
    console.log("HELLO WORLD");
    
}