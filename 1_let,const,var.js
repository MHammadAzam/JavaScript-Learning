
console.log("hello");

const accountId = 112233; // can't be changed again
let accountEmail = "hammad@gmail.com"; // can be changed, we will always use let
var accountPassword = "hammad123";// can be changed, avoid using var bcz of issue in function scope and block scope
accountCity = "Karachi"; // can be used like this but avoid it
let accountState; // undefined


// accountId = 334455; // error
accountEmail = "hammad2@gmail.com";
accountPassword = "hammad456";
accountCity = "Lahore";

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


