// converting everything using Number.

// 333 => 333
// "33abc" => NaN
// true => 1, false => 0
// null => 0
// undefined => NaN
// string("hammad") => NaN

let score = "100";
console.log(typeof score); // string

let valueInNumber = Number(score); // conversion from string to number
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // 100

// now what if someone has passed a score = "100abc", then it will also be converted to number but actually its NaN.
let score2 = "100abc";
let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2); // number
console.log(valueInNumber2); // NaN

// now if you have undefined and null values, null will be converted to 0 but undefined will be converted to NaN, same if you have boolean values, true will be converted to 1 and false to 0, also if you have string value e.g("hammad") then if will be converted to NaN.


// converting everything using Boolean
// 1 => true, 0 => false
// "hammad" => true, "" => false
// any number other than 0 => true
// null => false
// undefined => false

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)


// converting everything using String.
let number = 33
let stringNumber = String(number);
console.log(stringNumber)