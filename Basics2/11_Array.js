myArr.forEach((item, index) => {
    console.log(index, item);
});
// Example Output:
// 0 0
// 1 3
// 2 4
// 3 5


const newArr = myArr.map(num => num * 2);
console.log(newArr);  // [0,6,8,10]
console.log(myArr);   // [0,3,4,5] original array unchanged


const filteredArr = myArr.filter(num => num > 3);
console.log(filteredArr);  // [4,5]


const sum = myArr.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);  // 0+3+4+5 = 12


const found = myArr.find(num => num > 3);
console.log(found);  // 4


const foundIndex = myArr.findIndex(num => num > 3);
console.log(foundIndex);  // 2

const numbers = [5,2,9,1];
numbers.sort();  // Default: sorts as strings
console.log(numbers);  // [1,2,5,9]

numbers.sort((a,b) => b-a); // Descending order
console.log(numbers); // [9,5,2,1]


myArr.reverse();
console.log(myArr); // [5,4,3,0]


const arr1 = [1,2];
const arr2 = [3,4];
const combined = arr1.concat(arr2);
console.log(combined); // [1,2,3,4]


const copyArr = [...myArr]; // copy array
const combinedArr = [...arr1, ...arr2]; // combine arrays
console.log(copyArr);
console.log(combinedArr);


console.log(myArr.some(num => num > 3));  // true
console.log(myArr.every(num => num > 0)); // false


