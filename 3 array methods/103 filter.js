// JavaScript mein filter() ek built-in array method hai jo 
// ek naya array return karta hai, 
// 
// jismein sirf woh elements hote hain jo 
// ek specified       condition         ko satisfy karte hain. 
// 
// 
// Yani, yeh method kisi array ke elements ko filter karta hai, 
// 
// aur condition ke basis par ek naya array banata hai, 
// 
// jismein sirf woh elements hote hain jo true return karte hain.

const array = [1,22,13,4,5,6,7,8]




const isEven = function(number){
    return number%2 ===0;

}


console.log(array.filter(isEven));

const new_array1 = array.filter(isEven);

console.log(new_array1)



//   2nd    arrow fucn

const new_array2 = array.filter((number) => {
    return number%2 ===0;
}
)
console.log("new array2 : ", new_array2)


3011