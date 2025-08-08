//node .devcontainer/01-Basics/07-Dates-injs.js
let myDate=new Date()
console.log(myDate.toString()); //Fri Aug 08 2025 08:43:49 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Fri Aug 08 2025
console.log(myDate.toISOString()) //2025-08-08T08:47:05.363Z
console.log(myDate.toJSON()) //2025-08-08T08:47:05.363Z
console.log(myDate.toLocaleString()) //8/8/2025, 8:47:05 AM
console.log(typeof myDate); //OBJECT

let myCreatedDate=new Date(2026,1,31)
console.log(myCreatedDate.toDateString()); //Tue Mar 03 2026

let myCreatedDate1=new Date(2026,1,31,12,0)
console.log(myCreatedDate1.toLocaleString()); //3/3/2026, 12:00:00 PM

let myCreatedDate2=new Date("2026-01-31")
console.log(myCreatedDate2.toLocaleString()); //1/31/2026, 12:00:00 AM

let myTimeStamp=Date.now()
console.log(myTimeStamp); //1754643420121
console.log(myCreatedDate2.getTime());//1769817600000
console.log(Math.floor(Date.now()/1000));//1754643618(in Seconds)

// let newDate= new Date()
// console.log(newDate) //2025-08-08T09:05:45.804Z
// console.log(newDate.getDate());//8
// console.log(newDate.getDay());//5
// console.log(newDate.getFullYear());//2025
// console.log(newDate.getHours());//9
// console.log(newDate.getMilliseconds());//804
// console.log(newDate.getMinutes());//5
// console.log(newDate.getMonth());//7
// console.log(newDate.getSeconds());//45
// console.log(newDate.getTime()); //174643945804
// console.log(newDate.getTimezoneOffset()); //0
// console.log(newDate.getUTCDate()); //8
// console.log(newDate.getUTCDay()); //5











