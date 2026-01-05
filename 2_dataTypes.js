"use strict"; // treat all js code as newer version

// alert("Welcome to Data Types in JavaScript"); // undefined dataType

// ecmastrict is a documentaion for js check on tc39.es, otherwise use mdn docs

// Data Types in JavaScript
// 1. Primitive Data Types
// number(2 to power 53), null, string, symbol(uniqueness), boolean, bigint, undefined  (nnssbbu)

// 2. Non-Primitive Data Types
// objects (arrays, functions, dates)

console.log(typeof "hammad"); // string data type
console.log(typeof 34); // number data type
console.log(typeof 34.5); // number data type
console.log(typeof true); // boolean data type
console.log(typeof undefined); // undefined data type
console.log(typeof null); // object data type (bug in js)
console.log(typeof 9007199254741991n); // bigint data type
console.log(typeof Symbol("hammad")); // symbol data type

let bigNumber = 9007199254741991n;
console.log(typeof bigNumber) // 



