// node .devcontainer/03-Basics/01-Functions.js
function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("T");    
}
//sayMyName()
// function AddTwoNumber(number1,number2){ //Parameters
//     console.log(number1+number2);
// }
function AddTwoNumber(number1,number2){ //Parameters
    // let result= number1+number2;
    // return result;
    return number1+number2;
}
AddTwoNumber(3,4) //Arguments
AddTwoNumber() //Nan
const result=AddTwoNumber(3,5);
// console.log(result);
function loginUserMessage(UserName="Sam"){
    if(UserName===undefined){ // username===undefined = !username
        console.log("Plzz Enter a UserName")
        return
    }
    return `${UserName} just logged in`
}
// console.log(loginUserMessage("PRASHANT"));
// console.log(loginUserMessage()); // undefined Just logged in

function CalculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(CalculateCartPrice(200,400,500));

const User={
    UserName:"Prashant",
    Price:199,
}
function handleObject(anyobject){
    console.log(`UserName is ${anyobject.UserName} and Price is ${anyobject.Price}`);
}
// handleObjects(User)
handleObject({
    UserName: "Praj2006",
    Price: 999
});

const myNewArray=[200,400,500,600]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));



