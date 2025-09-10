//node 04-Iterations/05-For-each.js
const coding=["Js","rb","Cpp","Py","Java"]
//coding.forEach(function (item) {console.log(item);})

// coding.forEach((Val)=>{console.log(Val);})

function printMe(item){
    //console.log(item);    
}
//coding.forEach(printMe)
//coding.forEach((item,index,arr)=> {console.log(item,index,arr);})
const myCoding=[
    {
        languageName:"JavaScript",
        LanguageFile: "Js"
    },
    {
        languageName:"Java",
        LanguageFile: "Java"
    },
    {
        languageName:"Python",
        LanguageFile: "Py"
    }
]

myCoding.forEach((item)=>{console.log(item.languageName);
})