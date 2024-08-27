// if

const temperature = 41;

// if(temperature === 41){
//     console.log("less  than 50");
// }else{
//     console.log("temperature is greater than 50")
// }

// <, >, <=, >=, ==, !=, ===

const score = 200;

// if(score> 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
    
// }

// console.log(`User manual: ${power}`);


// const balance = 1000

// if(balance >500) console.log("test");

// if(balance < 500){
//     console.log("less than")
// }else if(balance < 750){
//     crossOriginIsolated.log("less than 750")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false;
const loggedInfromEmail = true;

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");  
}

if(loggedInFromGoogle ||loggedInfromEmail ){
    console.log("User logged in");
    
}