
// FOR OF LOOP -- USED FOR OBJECT and Arrays and Strings aswell

// 1 - LOOP ON ARRAY--
const array  = [1,2,3,4,5]
for (const value of array) {
    console.log(value)
}

// 2 - LOOP ON A STRING
const greet = "I am Muhammad Hammad Azam "
for (const greeting of greet){
  if(greeting == " "){
    console.log("-")
    continue
  }
  console.log(greeting)
}

// MAPS : JUST LIKE objects BUT HAVE SOME ITERATIONS
// THESE ARE UNIQUE VALUES
// No duplicate values inside it

const map = new Map()
map.set("name" , "hammad" )
map.set("Department" , "Computer science" )
map.set("name" , "hammad" ) // it wont be printed in that object because it is repeated and map refers unique values

// console.log(map)

for (const key of map) {
    console.log(key) // it will print that whole array but if i want that keys and values just use below method
}

// This is called array destructuing
for (const [key, value] of map) {
    console.log(key, ":-", value)
}


// 4:  FOROF ON OBJECTS
const myObj = {
  'game1' : 'nfs',
  'game2' : "pubg",
  "game3" : "gta"
}

for (const [key, value] of myObj) {
     console.log(key, value) // will show error objects not iteratable just like the maps, it can be iterated using ForIn loop
}
