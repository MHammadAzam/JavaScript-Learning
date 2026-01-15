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
//

// console.log(a) ... so this will give error because 'a' is defined using 'let' inside the block scope
// console.log(b) ... this will also give error because 'b' is defined using 'const' inside the block scope
console.log(c) // ... this will work beacause 'c' is defined using 'var' whhich is function scoped or globally scoped
// 'var' is not block scoped, it is either function scoped or globally scoped