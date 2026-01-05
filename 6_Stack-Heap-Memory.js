// Stack (Primitive), Heap (Non-Primitive)
// stack stores values as copies, heap stores values as references (original values)


// bcz in stack only copies are given to variables so orginal value remains unchanged
let myYt = "hammadYt"; // stored in stack
let anotherYt = myYt; // anotherYt gets a copy of myYt value
anotherYt = "codewithhammad"; // changing anotherYt does not affect myYt
console.log(myYt);
console.log(anotherYt);


// while in heap both variable point to the same reference so changing one affects the other
let userOne = {
  name: "hammad",
  age: 22,
}; // stored in heap

let userTwo = userOne;
userTwo.name = "codewithhammad"; // changing userTwo affects userOne since both reference the same object
console.log(userOne); 
console.log(userTwo);