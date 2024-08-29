// for each

const coding = ["js", "ruby","java","python","cpp"]

// coding.forEach( function (val) {
//     console.log(val);
    
// } )

// coding.forEach( (itme) => {
//     console.log(itme)
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item, index, arr) => {  // arrow function
    // console.log(item, index, arr);
    
})

const myCoding = [
{
    languagename: "javascript",
    languagefileName: "js"
},
{
    languagename: "java",
    languagefileName: "java"
},
{
    languagename: "python",
    languagefileName: "py"
},
]

myCoding.forEach( (item) => {
    console.log(item.languagename)
})
