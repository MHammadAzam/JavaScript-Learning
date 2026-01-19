// 1) IF STATEMENT
// condition inside the if should be true, after that the code will be executed .
// <, >, <=, >=, !, !=, !==, ==, ===

let temperature = 42
if(temperature == 42){
     console.log("Temperature is below 50")
}
else{
     console.log("Temperature is above 50")
}

// const score = 300
// if(score > 100){
//     const power = "fly"
//     console.log(`User Power: ${power}`)
// }
// console.log(`User Power: ${power}`) // it will show error because of block scope variable cant be accesed outside


// 2) NESTED IF STATEMENTS
 const balance = 1000
 if(balance < 500){
       console.log("less than 500")
 }
 else if(balance < 750){
       console.log("less than 750")
 }
 else if(balance < 900){
       console.log("Less than 900")
 }
 else{
  console.log("less than 1100")
 }


 const userLoggedIn = true
 const debitCard = true
 
 