
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


// 
function loginUserMessage(username){
      return `${username} just logged in`
}
console.log(loginUserMessage()) // if you dont pass any argument it will print "undefined" just logged in.
const message = loginUserMessage("john_doe")
console.log(message); // john_doe just logged in