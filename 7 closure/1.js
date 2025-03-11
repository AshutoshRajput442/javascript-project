// JavaScript mein closures ek aisa concept hai jo ek
// function ke andar dusre function ko define karne aur
// use karne ka tareeqa hota hai. Closure ek function ko
// access karne ka tareeqa deta hai, jo apne surrounding
// environment ki variables ko remember karta hai,
// even after uss function ka execution complete ho jata hai.

function outerFunction() {
  let outerVariable = "I am outside!";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Output: I am outside!


// Explanation:
// outerFunction ek function hai jo innerFunction ko return karta hai.

// innerFunction ke andar outerVariable ka use ho raha hai, 
// jo outerFunction ke scope mein define hai.


// Jab hum closureExample() call karte hain, to innerFunction apni surrounding environment, 
// yani outerFunction, ke scope ko yaad rakhta hai aur outerVariable ko access kar pata hai, 
// even though outerFunction ka execution complete ho gaya hota hai.


// Closure ka Concept:
// Jab ek function apne outer function ke variables ko access kar raha hota hai, 
// to woh closure kehlata hai.
// Closures mein ek important feature yeh hota hai ke 
// function apne lexically scoped environment ko yaad rakhta hai, 
// yaani woh apne outer function ke variables ko retain karta hai jab bhi uss 
// function ko call kiya jata hai.





// ---------------------------------------------------------other example

function outerfun(name) {
  var name = name;
  function innerfun() {
    console.log(name);
  }
  return innerfun;  
    
}


var ans = outerfun("sachin");   
ans(); //Output: sachin 



function fun(power){
    return function(number){
      return number ** power
    }
}
const squre = fun(2)
const ans2= squre(3)
console.log(ans2)