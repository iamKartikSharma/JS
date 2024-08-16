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
        // console.log("please enter a username");
        return
    }
    // return `${username} just logged in`
}

// console.log(loginuserMessage("kartik"))
console.log(loginuserMessage())

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,400))

const user = {
    username: "kartik",
    price:299
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username}and price is ${anyobject.price}`)
}
handleObject(user)

const mynewArray = [200, 400 , 500, 700]

function returnSecondvalue(getArray){
    return getArray[1]
}
console.log(returnSecondvalue(mynewArray))