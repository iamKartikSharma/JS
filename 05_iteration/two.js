const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js", "rb", "py", "java","cpp"]

for(const key in programming){
    // console.log(programming[key]);
    
}

// const map = new Map()
// map.set('In', "India")
// map.set('USA', "United State Of America")
// map.set('fr', "France")

// for (const key in map){
//     console.log(key);
    
// }

// objects mein loops lagana hai toh (for in) loop
// arrays mein loops lagana hai toh (for of) loop