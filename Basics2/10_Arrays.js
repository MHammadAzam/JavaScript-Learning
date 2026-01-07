
// We can also create any array having mixed datatypes

const myArr = [0,1,2,3,4,5]; // array literal syntax
const myHeroes =["Shaktiman", "Doraemon", "Batman"];

const myArr2 = new Array(1, 2, 3, 4, 5); // array constructor syntax
console.log(myArr[0]) // prints 0



// ************ ARRAY METHODS ************
myArr.push(6); // adds 6 at the end of the array, changes the original array
console.log(myArr); // prints [0,1,2,3,4,5,6]

myArr.pop(); // removes the last element from the array, changes the original array
console.log(myArr); // prints [0,1,2,3,4,5]

myArr.unshift(-1); // adds -1 at the start of the array, changes the original array
console.log(myArr); // prints [-1,0,1,2,3,4,5]

myArr.shift(); // removes the first element from the array, changes the original array
console.log(myArr); // prints [0,1,2,3,4,5]

console.log(myArr.indexOf(2)); // prints 2, index of element 2 in the array
console.log(myArr.includes(5)); // prints true, checks if 5 is present in the array

const Array2 = myArr.join("-"); // joins all elements of the array with "-" separator , converts to string
console.log(Array2); // prints "0-1-2-3-4-5"

const SliceArr = myArr.slice(1,4); // creates a new array from index 1 to 3 (4-1), does not change original array
console.log(SliceArr);

const SpliceArr = myArr.splice(1,2); // removes 2 elements from index 1, changes original array
console.log(SpliceArr); // prints [1,2]
