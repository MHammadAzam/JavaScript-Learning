// GLOBAL SCOPE IS OUTSIDE ALL THE FUNCTIONS AND BLOCKS
// LOCAL SCOPE IS INSIDE A FUNCTION OR BLOCK.

// whatever you write in global scope is accessible inside local scope, 
// But whatever you write in local scope is NOT accessible in global scope(i.e outside that function or block)

var c = 300 // as we have also decalred 'c' using var in block scope below, this 'c' will be overridden

// these curly braces are scope i.e in functions, loops, if-else etc.
if (true){
     let a = 10
     const b = 20
     var c = 30
}

// console.log(a) ... so this will give error because 'a' is defined using 'let' inside the block scope
// console.log(b) ... this will also give error because 'b' is defined using 'const' inside the block scope
console.log(c) // ... this will work beacause 'c' is defined using 'var' whhich is function scoped or globally scoped
// 'var' is not block scoped, it is either function scoped or globally scoped



// 1--- NESTED FUNCTIONS, child can access parent but parent cant access child.
function one(){
     const username = "hammad"

       function two(){
          const website = "learncodeonline.in"
          console.log(username);
       }
     //   console.log(website); // this will give error because 'website' is defined inside function 'two' and is not accessible outside it.
       two()
     }
one()

// 2--- NESTED IF BLOCKS, child can access parent but parent cant access child.
if(true){
     const username = "hammad"
     if(username === "hammad"){
          const website = "learncodeonline.in"
          console.log(username + website);
     }
     // console.log(website); // this will give error because 'website' is defined inside inner if block and is not accessible outside it.
}
// console.log(username)


// ************************ INTERESTING EXAMPLE ********************************************

console.log(addone(5) ) // in this case you can get the output 6 because of function hoisting
function addone(num){
      return num + 1
}


console.log(addTwo(5)) // in this case you will get error because function expression is not hoisted
const addTwo = function(num){
      return num + 2
}