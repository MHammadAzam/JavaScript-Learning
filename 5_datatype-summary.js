// THIS LECTURE IS INTERVIEW RELEVANT
// JS is a dynamically typed language e.g you don't need to specify the datatype of a variable when declaring it
// let score = 100; // JS automatically assigns the datatype as number

// TypeScript is a statically typed language e.g you need to specify the datatype of a variable when declaring it


// Primitive datatypes are call-by-value, TOTAL 7
// When a primitive value is assigned to a variable, a copy of the value is created and stored in memory.


// Non-primitive(Reference datatypes) are call-by-reference
// When a reference value is assigned to a variable, the variable stores a reference (or address) to the location in memory where the actual object is stored.

// ARRAY, OBJECTS, FUNCTIONS are non-primitive datatypes

const heroes = ['Naruto', 'Sasuke', 'Madara'];// array

let myObject = { // object
  name: 'Naruto',
  age: 16,
  isHero: true
}

const myFunction = function greet(){
       console.log("hello world");
       
}
