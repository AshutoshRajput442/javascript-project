const myarr = ["ankit","aman","sajal","golu"]

// const [val_1, val_2] = myarr 
// console.log(val_1)
// console.log(val_2)




const [val_1, val_2,val_3,val_4,val_5,val_6] = myarr 
console.log(val_1)
console.log(val_2)
console.log(val_3)
console.log(val_4)
console.log(val_5) //undefined
console.log(val_6)   //undefined


// const [val_1, ,val_2] = myarr 
// console.log(val_1)
// console.log(val_2)

console.log(myarr.slice(2))