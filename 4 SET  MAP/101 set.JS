// ITERABEL          USE FOR LOOP   STRING ARRAY

const name = "harshit";
for (let n of name) {
  // console.log(n)
}

const item = [1, 2, 3];
for (let i of item) {
  // console.log(i)
}

// ARRAY LIKE OBJECTS
const item2 = [1, 2, 3];
// console.log(item2.length)
// console.log(item2[0])

//--------------------------------------set iteerable
const set_number1 = new Set("hhhharshit");
// console.log(set_number1)
const set_number2 = new Set([1, 3, 2, 3, 2, 4, 5, 4, 8, 6]);
// console.log(set_number2)

//--------------------------------------set method

set_number2.add(100);
set_number2.add("item");

console.log(set_number2)

if (set_number2.has(10)) {
  console.log(1);
} else {
  console.log(0);
}

console.log(set_number2.delete("item"))

console.log(set_number2.size) 

console.log(set_number2.clear())


//-------------------------------------------

const newArray = new Array(1,2,3,3,3,4,5,5,6,6,7)
const newSet = new Set(newArray)
console.log("new set : " , newSet)
console.log("new set size  : " , newSet.size)
