// console.log(this)   // window object
// console.log(firstname)  //  undefined
// console.log(myfunction) // [Function    : myfunction]   
// console.log(myfunction())   // inside myfunction  undefined     


// console.log('-------------------')  

// function myfunction(){
//     console.log('inside myfunction')        
// }

// var firstname =  'sachin'   // hoisted  
// console.log(firstname)  // sachin
// console.log(myfunction)  // [Function: myfunction]      console.log(myfunction())
// console.log(myfunction())     // inside myfunction  undefined   







//  ----------- hoisting in javascript ---------------- 


// console.log(myfunction)  // [Function: myfunction]      console.log(myfunction())   

// var myfunction = function(){
//     console.log('inside myfunction')            
// }
// console.log(myfunction)


















//  ----------------- in case of let and const -----------------    


console.log(firstname)

let firstname = 'sachin'   // ReferenceError: Cannot access 'firstname' before initialization   

console.log(firstname)   // sachin