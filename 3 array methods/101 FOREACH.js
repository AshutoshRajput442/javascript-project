//foreach map filter reduce

// JavaScript mein forEach() ek array method hai
// jo array ke har element ke liye ek provided callback 
// function ko execute karta hai. 
// 
// Iska use tab hota hai jab humein array ke elements 
// par kuch action perform karna ho, jaise ki logging,
// updating, ya koi 
// 
// // operation execute karna, bina kisi value ko return kiye.








///                              with array










const array = [4,2,8,5];
// const array = ["ASHU","ANKIT","AKMAN"];

const multiply = (number, index) =>  {
    console.log("index : ",index); 
    console.log("multiply : ", number *2)
    console.log("-----------------------------")
}

for(let i = 0; i<array.length;i++)
{
    multiply(array[i],i)
}


console.log("--------foreach---------------------")

array.forEach(multiply)   //work as callback function
console.log("first array ", array)





console.log("--------  anonymous function-----NO FUN NAME----------------")


array.forEach(function(index){
    // console.log(index)
})






//---------------  array  with objects     -----------------------------------------





const users = [
    {name : 'ashu', age: 12, gender : 'M'},
    {name : 'mayank', age: 15, gender : 'F'},
    {name : 'ankit', age: 14, gender : 'M'},
    {name : 'aasif', age: 13, gender : 'F'}
]



users.forEach(function(user){
    console.log(user.age)
})

//  2nd 

for(let user of users){
    console.log(user.gender)

}
//3rd
users.forEach(user => {

    console.log(user.name)
    
});


