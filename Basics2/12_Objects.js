
// SINGLETON, constructor se jo banega wo singleton hoga , basic jo ham literals banate hai usse nhi bantaa.
// object.create, through this singleton can be created


// object Literals
// inside any object you can give any type of values even objects and arrays inside it

const mySymbol = Symbol("key1")

const user = {
  name: "hammad",
  "Full name": "Muhammad Hammad Azam", // we cant access this now with a ., so we can use [] method
  age: 18,
  location: "Peshawar",
  email: "hammad@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday"],
  [mySymbol]: "mykey1" // syntax to refer the symbol you have created above

}

console.log(user.name) // one way to access elements of object
console.log(user["email"]) // second way to access elements
console.log(user["Full name"])
console.log(user[mySymbol])

user.name = "azam" // to change any value of object
// Object.freeze(user) // after that no changes would occur if you someone wants to change anything inside the object
console.log(user)



user.greeting = function(){
  console.log("hello brothaa")
}
// console.log(user.greeting) // [Function (anonymous)], function wont execute just it will give function(anonymous)
// console.log(user.greeting()) // it will print the value as it is a method so u have to use ()

user.greetingTwo = function(){
  console.log(`Hello brotha, ${this.name}, ${this.email}`)
}
console.log(user.greetingTwo()) // Hello brotha, azam,