// Singleton

// object literals
// Object.create
const mySym = Symbol("key1")

const jsUser = {
    name: "kartik",
    [mySym]: "myKey1",
    age: 20,
    location: "jaipur",
    email: "kartik@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]

}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser[mySym])
// console.log(typeof jsUser[mySym])


jsUser.email = "kartik@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "kartik@microsoft.com"
// console.log(jsUser)
jsUser.greeting = function(){
    console.log("Hello JS user");
},
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, $(this.name)`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

 


