
let name = "hammad"
console.log(`my name is ${name}`) // called string interpolation , also known as template literals

const gameName = new String("pubg")// string object
console.log(gameName)
console.log(typeof gameName) // object

console.log(gameName[0]) // accessing string character using index
console.log(gameName.length) // length of string
console.log(gameName.toUpperCase()) // method to convert string to uppercase
console.log(gameName.toLowerCase()) // method to convert string to lowercase
console.log(gameName.charAt(1)) // method to get character at specific index
console.log(gameName.indexOf("b")) // method to get index of specific character
console.log(gameName.includes("pub")) // method to check if substring is present in string

const newString = gameName.substring(0, 3) // method to get substring from string
console.log(newString) // output: pub, substring from index 0 to 3 (excluding 3)

const sliceString = gameName.slice(0, 3) // method to get slice from string, 
console.log(sliceString) // output: pub, slice from index 0 to 3 (excluding 3)

const trimming = "    hammad    "
console.log(trimming.trim()) // method to remove whitespace from both ends of string

const replacing = "www.hammad.com"
console.log(replacing.replace("hammad", "ali")) // method to replace substring with another substring
