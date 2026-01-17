
// This--- keyword is used to refer the current context.
const user = {
    username: "hammad",
    price: 1000,

    welcomeMessage: function (){
      console.log(`${this.username} ,  Welcome to website`)
      // console.log(this)  it will print the whole object in console
    }
}

user.welcomeMessage() // prints hammad welcome to website
user.username = "Azam"
user.welcomeMessage() // prints Azam welcome to website


console.log(this) // it will print an empty object


// This keyword inside a function
function chai(){
  console.log(this) // it will give us a lot of values inside terminal like fetch, idealtime etc

  let username = "hammadAzam"
  console.log(this.username) // it will show undefined , this keyword can be used in objects
}
// chai()


// ******************************* ARROW FUNCTION ************************************
const Arrow = () => {
    const name = "hamyyy"
    console.log(this.name) // this will again give undefined

    console.log(this) // in arrow function, here this, will give an empty parantesis{}
}
// Arrow()


// 1 First way to declare an Arrow function called explicit return
const sum = (num1, num2) => {
     return num1 + num2
}
console.log(sum(8,10))

// 2 Second way to decalare an Arrow function called implicit return
const product = (num1, num2) => num1 * num2
console.log(product(4,5))



