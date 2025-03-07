const arr = [1,2,3,4,5,6]          //[1,2,3[4,5,6]]



// const newArr = [arr[0], arr[1], arr[2], arr.slice(3)];
// or
const temp= [...arr.slice(0,3), arr.slice(3)]

// --console.log(temp)




// Add an element "Hello" at the end of an array ["A", "B", "C"].
const arr2 = ["A", "B", "C"]
const temp2 = [...arr2, "hello"]
console.log(temp2)

//---------------- Check if an element exists in an array
console.log(arr2.includes("A"))

// 9️⃣ Sort an array [5, 1, 4, 2, 3] in ascending order.

console.log(...arr,...arr2)

// 8️⃣ Reverse an array without .reverse()


const arrti = [1, 2, 3, 4, 5];
for(let i = arrti.length-1; i>0;i--){
    console.log(arrti[i])
}