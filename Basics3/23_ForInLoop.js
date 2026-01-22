// FORIN LOOP ON OBJECT - also can be used in other places aswell
const myObj = {
  'game1' : 'nfs',
  'game2' : "pubg",
  "game3" : "gta"
}

for (const key in myObj) {
     console.log(key)
    console.log(myObj[key]); // to print values 
    
}

// 2: FORIN LOOP ON ARRAYS
const myArray = [1,2,3,4,5]
for (const key in myArray) {
    console.log(key)
    console.log(myArray[key])
}