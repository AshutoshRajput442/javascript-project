
// .reduce() method is used on arrays to 
// reduce them to a single value. 

// It iterates through each element of the array,

// applying a function that accumulates the result.







const array = [1,2,3,4,5]
const sum =  array.reduce((accumulator, currentvalue) => {
    return accumulator+currentvalue;
},10)

//  we can also set the starting value of accumulator == 10
console.log(sum)








// in object 

const cart = [
    {name :"ashu", age:1},
    {name :"aman", age:4},
    {name :"ankit", age:1}
]

const add = cart .reduce((accumulator, currentvalue)=>{
    return accumulator + currentvalue.age
},0);

console.log(add)