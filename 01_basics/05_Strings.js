const name = "kartik"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo is ${repoCount}`);

const gameName = new String ('kartik-hc-com')

// console.log(gameName[0])
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "    hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim()); // jo bhi extra spaces hai input mein usko hata deta hai//


const url = "https://kartik.com/kartik%20sharma"

console.log(url.replace('%20', '-'))

console.log(url.includes('kartik'))

console.log(gameName.split('-'))