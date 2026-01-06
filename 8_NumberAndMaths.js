// ********************************** Number Object **********************************
const score = 300;
console.log(score);

const scoreValue = new Number(400);// number object
console.log(scoreValue);


console.log(scoreValue.toExponential(2)); // method to represent number in exponential notation, output : 4.00e+2
console.log(scoreValue.toString()); // method to convert number to string
console.log(scoreValue.toFixed(2)); // method to format number to fixed decimal places, output: 400.00

const otherNumber = 123.756789;
console.log(otherNumber.toPrecision(3)); // method to format number to specified precision, output: 123.46


const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-PK')) // pakistan locale formatting, output: 10,000,000



// ********************************** Math Object in JavaScript **********************************

console.log(Math)
console.log(Math.abs(-78)) // method to get absolute value, output: 78 , converts only negative to positive
console.log(Math.round(4.6)) // method to round number to nearest integer, output: 5
console.log(Math.ceil(4.2)) // method to round number up to next integer, output: 5
console.log(Math.floor(4.9)) // method to round number down to previous integer, output: 4  
console.log(Math.min(0, 150, 30, 20, -8, -200)) // method to get minimum value from given numbers, output: -200
console.log(Math.max(0, 150, 30, 20, -8, -200)) // method to get maximum value from given numbers, output: 150
console.log(Math.random()) // method to get random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random() * 100) // random number between 0 and 100
console.log(Math.floor(Math.random() * 100)) // random integer between 0 and 99
console.log(Math.floor(Math.random() * 100) + 1) // random integer between 1 and 100


// generate random number between min and max (inclusive)
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random integer between 10 and 20
// math.random gives us value between 0 and 1 , which will be in points like 0.1,0.5, so we applied math.floor to convert it to just 0, but now we need our value to be atleast start from 10 so we add min, and then we gave a range inn which we wanted our value that is: min - max
