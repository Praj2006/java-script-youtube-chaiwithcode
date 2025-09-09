// //If
// const isUserloggedIn= true
// const temp=41
// //<,>,<=,>=,==,===(type check also),!=
// if(3!=2){
//  console.log("Excecuted");
// }
// if( temp<50){
//     console.log("Less than 50"); 
// }
// else{
//     console.log("Temprature is greater than 50");
// }
// if(false){
//     //Not Exceute
// }
// const score=200
// if(score>100){
//     const power="Fly"
//     console.log(User power:${power});
// }
const balance=1000
// if(balance>500) console.log("test"),console.log("test2");

//Nesting::
// if(balance<500){
//     console.log("Less than 500");    
// } else if(balance <750){
//     console.log("Less than 750");
// }else if(balance<900){
//     console.log("Less than 900");
// }
// else{
//     console.log("less than 1200");
// }
const UserLoggedIn=true
const debitCard=true
const LoggedINFromGoogle=false
const LoggedINFromEmail= true
if(UserLoggedIn&& debitCard){
    console.log("Allow to Buy Courses");
}
if(LoggedINFromEmail|| LoggedINFromGoogle){
    console.log("User Logged In");
    
}