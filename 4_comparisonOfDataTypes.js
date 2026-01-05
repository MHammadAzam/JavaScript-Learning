
console.log(2 > 3)
console.log(2 < 2)
console.log(2 >= 2)
console.log(2 > 2)
console.log(2 == 2)
console.log(2 != 2)


console.log("2" > 1) // true, because "2" is automatically converted to number 2

console.log(null > 0) // false, because null is converted to 0, so 0 > 0 is false
console.log(null == 0) // false, because null is only equal to undefined
console.log(null >= 0) // true

console.log(undefined > 0) // false, because undefined is converted to NaN, and any comparison with NaN is false
console.log(undefined == 0) // false
console.log(undefined >= 0) // false
