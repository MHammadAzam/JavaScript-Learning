
// make the code simpler and shorter using functions and also avoids repetition


// 1... Without Parameters and Without Return Type
function myName(){
  console.log("My name is John");
}
// myName();  // calling the function


// 2... With Parameters and Without Return Type
function sum(num1, num2){ // these are called parameters
  console.log(num1+num2)
}
sum(5,19); // these are called arguments
const summing = sum(10,20) // although it will execute and print the sum
console.log(summing); // undefined because there is no return type


// 3.... With Parameters and With Return Type
function multiply(a,b){
  return a*b;
}
const result = multiply(5,4)
console.log(result); // 20


// 4.... concept about undefined when no argument is passed
function loginUserMessage(username){
      return `${username} just logged in`
}
console.log(loginUserMessage()) // if you dont pass any argument it will print "undefined" just logged in.
const message = loginUserMessage("john_doe")
console.log(message); // john_doe just logged in


// 5.... REST OPERATOR, e.g if you have multiple parameters and you dont know how many arguments will be passed
function calculateCartPrice(...prices){
       return prices
}
console.log(calculateCartPrice(20,30,40,50)); // [ 20, 30, 40, 50 ]

// 6 ... passing object into function
const user = {
  username: "hammad",
  price: 2000
}

function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user); // Username is hammad and price is 2000
handleObject({  // also you can directly pass object while calling a function
  username: "alice",
  price: 3500
})


// 7... passing array into function
const myNewArray = [ 200, 400, 600, 800 ]

function returnSecondValue(arr){
       return arr[1]
}
console.log(returnSecondValue(myNewArray)); // 400
console.log(returnSecondValue([ 5,10,15,20 ])); // 10 , directly passing array while calling function







// PERSONAL PRACTICE QUESTIONS ON FUNCTIONS
// 1
// function hammad(){
//   console.log(hammad)
// }
// hammad()

// // 2
// function divideByTwo(num){
//   console.log(num/2)
// }
// divideByTwo(50)

// // 3
// function greetUser(username){
//   return username
// }
// const greeting = greetUser("hammad")
// console.log(greeting)

// // 4 undefined logic inside function
// function userAge(age){
//   return `your age is ${age} and its very good age for learning`

// }
// const ageMessage = userAge()
// console.log(ageMessage) // your age is undefined and its very good age for learning

// // 5 Rest Operator
// function getColors(...colors){
//   return colors
// }
// console.log(getColors("red", "blue", "green", "yellow")) // [ 'red', 'blue', 'green', 'yellow' ]  

// // 6 passing object into function
// const StdDetails = {
//   name: "hammad",
//   age: "22",
//   degree: "Computer Science",
//   Cgpa: 3.6
// }

// function handleObject(Myobject){
//   return `Student name is ${Myobject.name}, age is ${Myobject.age}, and my degree is ${Myobject.degree}`
// }
// console.log(handleObject(StdDetails))
// //     OR
// console.log(handleObject({
//   // write details here of another student
// }))

// // 7 passing an Array inside the function
// const Arr3 =[100, 200, 300, 400, 500, 600, 700]
// function returnForthValue(arr){
//   return arr[3] + 1
// }
// console.log(returnForthValue(Arr3)) // 401
// //      OR
// console.log(returnForthValue([10,20,30,40,50])) // can pass values directly here