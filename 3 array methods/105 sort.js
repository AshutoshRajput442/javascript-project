
// const arr = ["zens","mahd","kjay"]

// console.log(arr.sort())

// console.log(arr)


/*
const arr = [12,53,1,34,12,311,1,5]

arr.sort((a,b)=>a-b)               //ascending a-b   descending    b-a

console.log(arr)
*/


//   in object in array


const low_to_high = [
    {id: 1, price: 211},
    {id: 2, price: 11},
    {id: 3, price: 231},
    {id: 5, price: 441}
]

const ans = low_to_high.sort((low,high)=> high.price - low.price)
console.log(ans)