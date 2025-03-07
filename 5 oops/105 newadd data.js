// add new functioin in usermethod if we forget that 

// const obj1 = {
//     key1: "value1",
//     key2: "value2"
// };

// const obj2 = { 
//     ...obj1, // Spread Operator se merge kar diya
//     key3: "value3"
// };

// console.log(obj2.key1); // Output: value1






const obj1 = { key1: "value1", key2: "value2" };

const obj2 = Object.create(obj1); // obj2 inherits from obj1
obj2.key3 = "value3"; 

console.log(obj2.key2); // Output: "value2" (comes from obj1)
console.log(obj2.key3); // Output: "value3" (comes from obj2)
console.log(obj2); // Output: { key3: 'value3' }, but it has access to obj1's keys via prototype
