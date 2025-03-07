

const person = new Map()
person.set(12,102)
person.set([1,2,3,4],102)
person.set(["name"],102)
person.set(fname  = "ashutosh",102)
person.set([fname  = "ashutosh"],102)
// console.log("map  : ", person)


for(let persons of person.keys()){
    // console.log(persons, typeof persons)
}


console.log("*********************          methods          *********************")


console.log("get : ", person.get(12))      // keys daalini hai 
console.log(" delete : " ,person.delete(12))
console.log("original : ",person)


// **********************  for of and destructing on map****************

person.forEach((value, key) => {
    console.log(`${key}, ${value}`)
})




console.log("*************   add extrac informatino in object from map  *********************")



const obje = {
    id: 1,
    name: "ashu"
}


const extraInfoAdd = new Map();

extraInfoAdd.set(obje , {age: 122, gender: "male"})
console.log(extraInfoAdd)



console.log(extraInfoAdd.get(obje))
console.log(extraInfoAdd.get(obje).age)