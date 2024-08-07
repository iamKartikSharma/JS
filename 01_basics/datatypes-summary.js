// Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); 

const bigNumber = 345673292946492n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name: "kartik",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof id);

// *********************************************************

//  Stack (primitive), Heap(Non-Primitive)

let myname ="ananya"

let anothername = myname
anothername = "kartik"

console.log(anothername)

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "kartik@google.com"

console.log(userOne.email)
console.log(userTwo.email)

