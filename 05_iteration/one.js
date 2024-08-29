// for of 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num+ ' ');
}

// const greetings = "Hello world!"
// for(const num of greetings){
//     console.log(`Each char is ${num}`);
    
// }

// Maps

const map = new Map()
map.set('In', "India")
map.set('USA', "United State Of America")
map.set('fr', "France")

// console.log(map)

for(const [num,  value] of map){
    // console.log(num, ':-',value);
    
}

const myobject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

for(const [key, value] of myObject){
    console.log(key, ':-', value);
    
}






