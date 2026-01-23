const coding = ["Js", "Ruby", "Python", "Java", "Flutter", "React"]
// 1--- ARROW METHOD
// coding.forEach( (element) => {
//        console.log(element)   // PRINTS ALL THE ELEMENTS FROM THAT ARRAY
// });

// 2--- SIMPLE FUNCTION METHOD
// coding.forEach(function(element){
//      console.log(element) 
// })

// 3--- PASSING A SEPERATE FUNCTION
// function printMe(item){
//        console.log(item)
// }
// coding.forEach(printMe)

// 4--- FOREACH HAS MULTIPLE MORE PARAMETERS (INDEX, ARRAY, ITEM)
coding.forEach((item, index, arr)=>{
     console.log(item,index,arr)
})


// 5--- MULTIPLE OBJECTS WITHIN AN ARRAY
const myCoding = [
  {
     langName : "JavaScript",
     langFileName : "Js"
  },
  {
     langName : "Python",
     langFileName : "Py"
  },
  {
     langName : "C Plus Plus",
     langFileName : "C++"
  }
]
myCoding.forEach((item,index)=>{
   console.log(item)   // IT WILL GIVE ALL THE THREE OBJECTS
    console.log(item.langFileName) // IT WILL JUST GIVE VALUES FROM LANGFILENAME
})

