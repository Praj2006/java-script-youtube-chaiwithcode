let score ="33"

console.log(typeof score)
console.log(typeof(score))
let valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

let score1 ="HITESH"

console.log(typeof score1)
console.log(typeof(score1))
let valueInNumber1=Number(score1)
console.log(typeof valueInNumber1)
console.log(valueInNumber1)

let score2 =null

console.log(typeof score2)
console.log(typeof(score2))
let valueInNumber2=Number(score2)
console.log(typeof valueInNumber2)
console.log(valueInNumber2)

let score3 =undefined

console.log(typeof score3)
console.log(typeof(score3))
let valueInNumber3=Number(score3)
console.log(typeof valueInNumber3)
console.log(valueInNumber3)

let score4 =true

console.log(typeof score4)
console.log(typeof(score4))
let valueInNumber4=Number(score3)
console.log(typeof valueInNumber4)
console.log(valueInNumber4)
//"33"=> 33
//"33abc"=> NaN
// true=> 1; False=> 0

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let isLoggedIn1="PRASHANT RAJ"
let booleanIsLoggedIn1=Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1)

let isLoggedIn2=""
let booleanIsLoggedIn2=Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2)

// 1=> TRUE ; 0=> FALSE
// ""=> FALSE
//"PRASHANT RAJ"=>TRUE

let somenumber=33
let stringNumber= String(somenumber)
console.log(typeof stringNumber);

// *************************OPERATIONS***********************************************************
let value=3
let negValue= -value
console.log(negValue);

console.log(2+2); //SUM
console.log(2-2);  //DIFFERENCE
console.log(2*2); //MULTIPLICATION
console.log(2**2); //POWER 
console.log(2/2); //DIVISION
console.log(2%3); //MODULUS 

let str1="HELLO"
let str2=" PRASHANT"
let str3= str1+str2
console.log(str3);
console.log("1"+2)
console.log(1+"2")
console.log("1"+"2")
// node .devcontainer/01-Basics/03-ConversionOperation.js
console.log(1+2+"2")
/*
7.1.1 ToPrimitive ( input [ , preferredType ] )
The abstract operation ToPrimitive takes argument input (an ECMAScript language value) and optional argument
preferredType (STRING or NUMBER) and returns either a normal completion containing an ECMAScript language
value or a throw completion. It converts its input argument to a non-Object type. If an object is capable of converting to more than one primitive type, it may use the optional hint preferredType to favour that type. It performs the
following steps when called:
1. If input is an Object, then
a. Let exoticToPrim be ? GetMethod(input, %Symbol.toPrimitive%).
b. If exoticToPrim is not undefined, then
i. If preferredType is not present, then
1. Let hint be "default".
ii. Else if preferredType is STRING, then
1. Let hint be "string".
iii. Else,
1. Assert: preferredType is NUMBER.
2. Let hint be "number".
iv. Let result be ? Call(exoticToPrim, input, « hint »).
v. If result is not an Object, return result.
vi. Throw a TypeError exception.
c. If preferredType is not present, let preferredType be NUMBER.
d. Return ? OrdinaryToPrimitive(input, preferredType).
2. Return input
NOTE When ToPrimitive is called without a hint, then it generally behaves as if the hint were NUMBER.
However, objects may over-ride this behaviour by defining a %Symbol.toPrimitive% method. Of the
objects defined in this specification only Dates (see 21.4.4.45) and Symbol objects (see 20.4.3.5)
over-ride the default ToPrimitive behaviour. Dates treat the absence of a hint as if the hint were
STRING.
*/
console.log((3+4)*5%3);
console.log(+true);
console.log(+"")
let num1,num2,num3
num1=num2=num3=2+2
let gameCounter=100
gameCounter++;
console.log(gameCounter)

