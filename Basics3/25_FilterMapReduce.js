const coding = ["Js", "Ruby", "Python", "Java", "Flutter", "React"]
const values = coding.forEach((item)=>{
     console.log(item)
     return item // still it will return undefined
})
// console.log(values)  // it returns undefined, even if you type return keyword inside ForEach


// FILTER METHOD : IT RETURNS ELEMENTS
const myNums = [1,2,3,4,5,6,7,8,9,10]
// const num = myNums.filter((value)=> num > 1) no return keyword if writting in same line and no block scope{} opened
const numbers = myNums.filter((num)=>{
      return num%2==0
})
console.log(numbers)


// MAP METHOD : IT ALSO RETURNS ELEMENT
const myNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const plusTen = myNumbers.map((value)=>{
     return value + 10
})
console.log(plusTen)

// const array = []
// myNumbers.forEach((item)=>{
//     array.push(item + 10)
//     console.log(array)
// })


// CHAINING METHOD: USING MAP MORE THAN 1 TIME
const newNums = myNumbers
               .map((num)=> num * 10 )
               .map((num)=> num + 2) // here num value will start from 10, beacause of the above map condition
               .filter((num)=> num > 60)
console.log(newNums)



// REDUCE METHOD : ACCUMULATOR(INITIAL VALUE), CURRENT VALUE
const array2 = [2,4,6,8,10,12,14,16,18,20]
const initiaValue = 0
const sum = array2.reduce((ACCUMULATOR, CURRENT)=>{
    return ACCUMULATOR + CURRENT
})
console.log(sum)
// Firstly Accumulator=0, current=2, so 0+2=2, now accumulator=2, current=4, so 2+4=6, and so onnnnn......