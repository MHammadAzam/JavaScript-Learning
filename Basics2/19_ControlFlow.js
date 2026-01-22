// FALSY VALUES : false, 0, -0, "" , bigInt 0n, null, undefined, NaN
// TRUTHY VALUES :  true, 1, [], {}, "0", "false", " ", function(){}, 

// NULLISH COALESCING OPERATOR (??):    NULL, UNDEFINED
let val1;
val1 = 5 ?? 10
val1 = null ?? 50 // it is used for safety check it will ignore null value
val1 = undefined ?? 20 // it is used for safety check it will ignore undefined value
console.log(val1)

// TERNARY OPERATOR:
// condition ? true : false
const iceTeaPrice  = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("Greater than 80")

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


 // 3) checking multiple values inside the IF condition.
 const userLoggedIn = true
 const debitCard = true
 const LoggedFromEmail = false
 const LoggedFromGoogle = true

 if(userLoggedIn && debitCard){
       console.log("Allow user to purchase item")
 }
if(LoggedFromEmail || LoggedFromGoogle){
     console.log("User logged In");
}

//  ************************** SWITCH CASE ***********************************************

const month = 3
switch(month){
     case 1:
       console.log("January")
       break;
     case 2:
       console.log("February")
       break;
     case 3:
      console.log("March")
      break;
     case 4:
      console.log("April")
      break;

      default:
        console.log("Default Case")
        break;

}