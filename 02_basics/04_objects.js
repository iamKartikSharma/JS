// const tinderUser = new Object()
const tinderUser ={}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser = {
    email: "sime@gmail.com",
    Fullname: {
        userfullname:{
            firstname: "kartik",
            lastname: "sharma"
        }
    }
}

// console.log(regularUser.Fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

const obj3 = {...obj1,...obj2}
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "k@gmail.com"
    },
    {

    },
    {

    },
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course ={
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"kartik"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "kartik",
//     "coursename": "js in hindi",
//     "price": "free"
// }


