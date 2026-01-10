const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes) // this will print array within the array.

// (1) 
const concating = marvel_heroes.concat(dc_heroes)
// console.log(concating) // it merges properly

// (2) Spread Operator
const all_NewHeroes = [...marvel_heroes, ...dc_heroes]
console.log(all_NewHeroes) // most used way to combine 2 arrays.

// (3)
const another_Array = [1, 2, 3, [4,5,6], 7 , [8,9, [10,11,12]]] // in this case use flat
const real_Array = another_Array.flat(Infinity) //flat is used to make all arrays elements into one single array
// console.log(real_Array)

// (4) To check whether anything u enterd is array or not and also you can convert to array
console.log(Array.isArray("Hammad")) // it will check and give value in true or false
console.log(Array.from("Hammad")) // it will convert this string into an array
// Below one is for interviews
console.log(Array.from({name: "hammad"})) // it will print empty because it can directly convert the object

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)) // also converts this to an array





// myArr.forEach((item, index) => {
//     console.log(index, item);
// });
// // Example Output:
// // 0 0
// // 1 3
// // 2 4
// // 3 5


// const newArr = myArr.map(num => num * 2);
// console.log(newArr);  // [0,6,8,10]
// console.log(myArr);   // [0,3,4,5] original array unchanged


// const filteredArr = myArr.filter(num => num > 3);
// console.log(filteredArr);  // [4,5]


// const sum = myArr.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum);  // 0+3+4+5 = 12


// const found = myArr.find(num => num > 3);
// console.log(found);  // 4


// const foundIndex = myArr.findIndex(num => num > 3);
// console.log(foundIndex);  // 2

// const numbers = [5,2,9,1];
// numbers.sort();  // Default: sorts as strings
// console.log(numbers);  // [1,2,5,9]

// numbers.sort((a,b) => b-a); // Descending order
// console.log(numbers); // [9,5,2,1]


// myArr.reverse();
// console.log(myArr); // [5,4,3,0]


// const arr1 = [1,2];
// const arr2 = [3,4];
// const combined = arr1.concat(arr2);
// console.log(combined); // [1,2,3,4]


// const copyArr = [...myArr]; // copy array
// const combinedArr = [...arr1, ...arr2]; // combine arrays
// console.log(copyArr);
// console.log(combinedArr);


// console.log(myArr.some(num => num > 3));  // true
// console.log(myArr.every(num => num > 0)); // false


