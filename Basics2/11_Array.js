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
