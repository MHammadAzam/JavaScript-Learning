
// const tinderUser = new Object() // SINGLETON OBJECT

const tinderUser = {} // till now its an empty object

tinderUser.id = "123abc"
tinderUser.name = "hammad"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
  name: "Azam",
  email: "azam@example.com",
  fullName:{
    userFullName: {
      firstName: "Muhammad Hammad",
      lastName: "Azam"
    }
  }
}
// console.log(regularUser.fullName.userFullName.firstName)

const obj1 = { 1: "a", 2: "b",  3: "c" } 
const obj2 = { 4: "d", 5: "e", 6: "f" } 

const obj3 = Object.assign({},obj1, obj2) // ye sb ek object me merge kr dega, {} start mai as a target use hota hai so dono arrays is  empty object me chalay jayengay, but agar apne {} na diya to pehla object target ban jata hai aur usme hi sab merge ho jata hai.
// console.log(obj3)

// WE WILL USE MOSTLY THE BELOW METHOD, Spread Operator
const obj5 = {...obj1, ...obj2} // ye bhi sb ek object me merge kr dega
// console.log(obj5)

// ANOTHER WAY TO MERGE OBJECTS E.G IF DATA IS COMING FROM DATABASE ABOUT USERS
const users = [
  {
    id : 1,
    email: "azam@example.com"
  },
  {
    id : 2,
    email: "azam@example.com"
  },
  {
    id : 3,
    email: "azam@example.com"
  },
]
console.log(users[0])
console.log(tinderUser)
console.log(Object.keys(tinderUser)) // ye sare keys ko ek array me convert kr dega, VERYYYY IMPORTANTTTTTTT
console.log(Object.values(tinderUser)) // ye sare values ko ek array me convert kr dega, VERYYYY IMPORTANTTTTTTT
console.log(Object.entries(tinderUser)) // ye keys and values dono ko ek array of arrays me convert kr dega, VERYYYY IMPORTANTTTTTTT
console.log(tinderUser.hasOwnProperty("email")) // ye check krta hai k email property tinderUser me hai ya nhi, true or false me dega

// OBJECT DESTRUCTURING
const course = {
  courseName: "Javascript",
  price: "999",
  courseInstructor: "HITESH CHAUDHARY"
}
// console.log(course.courseName)
// console.log(course["courseName"])
// const {courseName: Course} = course // so you can also rename while destructuring
// console.log(Course)
const {courseName, price, courseInstructor} = course // object destructuring
console.log(courseName, price, courseInstructor)


