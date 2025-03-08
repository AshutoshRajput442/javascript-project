
function hello(){
    console.log("hello")    
}

hello.myownproperty = "goodmorning"

// console.log(hello.myownproperty) // goodmorning
// console.log(hello) // [Function: hello] { myownproperty: 'goodmorning' }
// console.log(hello()) // hello undefined 


//--------------------------------------------------------------------------------------------------------------------

// function hume ek free space deta hai jaha hum kuch bhi store kar sakte hai
// prototype is a object which is created by js engine and it is attached to every function
// and it is used to store the property and method which is shared by all the object created by that function
// we can add property and method to prototype object it is the free space given by js engine


// only function has prototype property



// console.log(hello.prototype) // hello {}// it is empty object












//--------------------------------------------------------------------------------------------------------------------
// protype me method add karne ka tarika

hello.prototype.newproperty = "newvalue"
hello.prototype.newmethod = function(){
    return "newmethod"
}
console.log(hello.prototype)
console.log(hello.prototype.newproperty)
console.log(hello.prototype.newmethod())