

let myDate = new Date()
console.log(myDate) // not readable format
console.log(myDate.toDateString()) // gives only date in readable format
console.log(myDate.toTimeString()) // gives only time in readable format
console.log(myDate.toLocaleString()) // gives date and time in local format
console.log(myDate.toISOString()) // ISO format
console.log(myDate.toJSON()) // JSON format

console.log(typeof myDate) // object

// WAYS TO CREATE DATE OBJECT
// const myCreatedDate = new Date(2026, 0, 7) SHOWS JUST THE DATE
// const myCreatedDate = new Date(2026, 0, 7, 10, 14, 30) SHOWS DATE WITH TIME YOU PROVIDED
// const myCreatedDate = new Date("2026-1-07")  YY-MM-DD FORMAT
const myCreatedDate = new Date("01-07-2026") // MM-DD-YYYY FORMAT
// console.log(myCreatedDate.toLocaleString());


// ************************** TIMESTAMP **************************
let myTimeStamp = Date.now() // gives timestamp in milliseconds from 1st Jan 1970 to current date
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // gives timestamp of the created date
console.log(Math.floor(myTimeStamp/1000)); // gives timestamp in seconds


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // month starts from 0 to 11
console.log(newDate.getDate()); // date starts from 1 to 31
console.log(newDate.getDay()); // day starts from 0 to 6 (0-Sunday, 1-Monday, ..., 6-Saturday)
console.log(newDate.getFullYear()); // gives full year
console.log(newDate.getHours()); // gives hours part of the time
console.log(newDate.getMinutes()); // gives minutes part of the time
console.log(newDate.getSeconds()); // gives seconds part of the time
console.log(newDate.getMilliseconds()); // gives milliseconds part of the time


const ham = newDate.toLocaleString('default', {month: 'long'}) // gives full month name
console.log(ham);

