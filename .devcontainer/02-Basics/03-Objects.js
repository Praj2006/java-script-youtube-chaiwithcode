//node .devcontainer/02-Basics/03-Objects.js
//Singleton
// Object.create //SINGLETON
//OBJECT LITERALS
const mysym=Symbol("Key1")
const JsUser={
    name:"Hitesh",
    "FULL NAME":"PRASHANT RAJ",
    age:19,
    location:"Jaipur",
    [mysym]:"myKey1",
    email:"prashnt2006@gmail.com",
    isLoggedIn:false,
    lastloginday:["Monday","Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["FULL NAME"])
console.log(JsUser[mysym]);

JsUser.email="aahnprst018@gmail.com"
// Object.freeze(JsUser)
JsUser.email="prashnt2006@gmail.com"
console.log(JsUser);
JsUser.greeting=function(){
    console.log("Hello JsUser");
}
console.log();
console.log(JsUser.greeting());
JsUser.greeting2=function(){
    console.log(`Hello JsUser, ${this.name}`);
}
console.log(JsUser.greeting2());


