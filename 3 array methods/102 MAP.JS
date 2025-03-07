// JavaScript mein map() ek built-in array method hai 
// jo ek naye array ko return karta hai,
// 
// jismein original array ke har element par ek 
// provided function apply hota hai. 
// 
// Iska use tab hota hai jab humein array ke elements ko 
// transform karna ho,
// 
// // bina original array ko modify kiye.



//                         with array





// map fucntion return the new array    //[ 4, 9, 16, 25, 36 ]
// if nothing is return it will return the undefined in the new array

// [ undefined, undefined, undefined, undefined, undefined ]





const array = [2,3,4,5,6]
/*
const squre = function(numbers, index){
    console.log("index : ",index); 
    console.log("multiply : ", numbers * numbers)
    console.log("-----------------------------")

    // return numbers*numbers
}

const new_array  = array.map(squre)

console.log(new_array)
console.log(array)
*/




// like fucntion expresssion

const new_array2  = array.map(function(number){
    return number*number;
})

console.log(new_array2)   // [ 4, 9, 16, 25, 36 ]




// like arrow fucntion 

// by using foreach in object

const new_array3 = array.map((number)=>{
    return number*number;
})
console.log(new_array3)      //[ 4, 9, 16, 25, 36 ] 
















//             with objects


const users = [
    {name : 'ashu', age: 12, gender : 'M'},
    {name : 'mayank', age: 15, gender : 'F'},
    {name : 'ankit', age: 14, gender : 'M'},
    {name : 'aasif', age: 13, gender : 'F'}
]

const data = users.map((user)=>{
    return user.name
})

console.log("object data: " , data)