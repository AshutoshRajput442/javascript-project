// __proto__ aur [[prototype]] JavaScript ke Prototype Inheritance 
// aur Prototype Chain se related concepts hain.




// 1. __proto__ (Dunder Proto)
// Ye ek reference hota hai jo kisi object ke prototype ko point karta hai.
// Har object ke paas ek hidden property hoti hai __proto__, jo uske parent (prototype) object ko refer karti hai.
// Isse Prototype Chain ka access milta hai.


const obj1 = { key1: "value1" };
const obj2 = Object.create(obj1); // obj2 ka prototype obj1 hai

console.log(obj2.__proto__); // Output: { key1: "value1" }
console.log(obj2.key1); // Output: "value1" (obj1 se aaya)

console.log("-------------------------------------------------");


// 2. [[Prototype]] (Internal Property)                  // officially nhi likha hua hai in ecma script me 
// [[Prototype]] ek internal property hai jo JavaScript engine maintain karta hai.
// Ye wahi __proto__ hai, bas internal representation hai jo browser DevTools me dikhta hai.
// Directly access nahi kiya ja sakta, sirf Object.getPrototypeOf(obj) se dekha ja sakta hai.

const obj = { name: "Ashu" };

console.log(Object.getPrototypeOf(obj)); // Prototype object dikhayega




console.log("-------------------------------------------------");

// Best Practice (Avoid __proto__, Use Object.create())
const obj11 = { key1: "value1" };
const obj22 = Object.create(obj11); // obj2 inherits from obj1

console.log(Object.getPrototypeOf(obj22)); // Output: obj1
console.log(obj22.key1); // Output: "value1"
