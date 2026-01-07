

let myDate = new Date()
console.log(myDate) // not readable format
console.log(myDate.toDateString()) // gives only date in readable format
console.log(myDate.toTimeString()) // gives only time in readable format
console.log(myDate.toLocaleString()) // gives date and time in local format
console.log(myDate.toISOString()) // ISO format
console.log(myDate.toJSON()) // JSON format

console.log(typeof myDate) // object