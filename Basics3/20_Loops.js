// FOR LOOP
// To change value of a varibale which is used multiple times in a code, double click on that variable which will select that variable then press ctrl + d

//  declare variable, Condition check, itereate it
// 1 ... SIMPLE FOR LOOP
for (let i = 0; i < 10; i++) {
  const element = i;

  if(element == 5){
        // console.log("5 is a perfect number")
  }
  // console.log(element)
  
}


// 2: LOOP WITHIN A LOOP
for(let i = 1; i<=10; i++){
  // console.log("Outer Loop")
    for(let j = 1; j<=10; j++){
          // console.log("Inner Loop")
          // console.log(i + "*" + j + "=" + (i*j))  it will print tables from 1 to 10
    }
}


// 3: LOOP ON ARRAYS
let myArray = ["flash", "batman", "superman", "King", "Bot", "Naruto"] // 6

for(let i = 0 ; i < myArray.length; i++){
    console.log(myArray[i])
}


// 4: BREAK AND CONTINUE
for (let index = 1; index <= 20; index++) {
  if(index == 5){
    // break , it will terminate the loop at this stage
    continue  // it will just skip this stage and continue to show other further values
  }
  console.log(`Value of i is ${index}`) // prints value from 1 to 20
  
}