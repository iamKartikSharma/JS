const coding = ["js","ruby","java","python","cpp"]

const values = coding.forEach( (item) => {
    // console.log(item)
    return item
})

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

// const newNums = [] 

// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const myNums = [1, 2, 3, 4, 5,6 , 7, 8, 9,10];

// const newNums = myNums.map( (num) => num + 10)
const newNums = myNums
            .map( (num) => num*10)
            .map( (num) => num +1)
            .filter( (num) => num >= 40)  //Chaining as much as u can
console.log(newNums);
