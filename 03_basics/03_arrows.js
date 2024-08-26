const user = {
    username: "kartik",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username},welcome to website`);  // this keyword current context ko refer krta hai
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function nane(){
//     let username = "kartik"
    // console.log(this.username);  // sirf objects ke unde rhe this keyword use hota hai
// }

// nane()

// const nane = function () {
//     let username = "kartik"
//     console.log(this.username)
// }
const nane = () => {
    let username = "kartik"
    console.log(this);
}

// nane()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// const addTwo = (num1,num2) =>  num1 + num2
// const addTwo = (num1,num2) =>  (num1 + num2)
const addTwo = (num1,num2) =>  ({username: "kartik"})


console.log(addTwo (3,4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.foreach(() => {})