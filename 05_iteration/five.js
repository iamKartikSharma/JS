// reduce
// mainly use in shopping cart

const myNums =  [1, 2, 3]


// Using functions
// const myTotal = myNums.reduce(function (acc, currVal)  {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
    
//     return acc + currVal
// }, 0) 


// Using arrow function
const myTotal = myNums.reduce( (acc,currVal) => acc + currVal, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "jsCourse",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev Course",
        price: 5999
    },
    {
        itemName: "data scientist Course",
        price: 12999
    },
]

const priceToPay= shoppingCart.reduce((acc,item) => acc +item.price, 0)
console.log(priceToPay);
