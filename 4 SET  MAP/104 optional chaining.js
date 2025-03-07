// Optional chaining (?.) is a feature in JavaScript that allows
//  you to safely access deeply nested properties of an object 
// without having to check if each level exists. 
// 
// If any part of the chain is null or undefined, 
// the whole expression short-circuits and returns undefined 
// instead of throwing an error



const obj1 = {
    id: 1,
    name: "ashu",
    address: {pin: 1212}
}


console.log(obj1?.id)
console.log(obj1?.address?.pin)

console.log(obj1?.education?.marks)

