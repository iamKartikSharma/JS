function sayMyName(){
    console.log("k")
    console.log("a")
    console.log("r")
    console.log("t")
    console.log("i")
    console.log("k")
}
// sayMyName()

// function addtwoNumbers(number1, number2){  //Parameters
//     console.log(number1 + number2)
// }

function addtwoNumbers(number1, number2){  //Parameters
//    let result = number1 + number2
//    return result
      return number1+ number2
}
    
const result = addtwoNumbers(3,5) //arguments
// console.log(result)

function loginuserMessage(username){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginuserMessage("kartik"))
console.log(loginuserMessage())