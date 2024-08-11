// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);   //object

// let myCreatedDate = new Date(2023,0 ,23, 5, 3);
// let myCreateddate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2024");
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp= Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})
